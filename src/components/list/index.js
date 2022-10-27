import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from './api';
import { Container, ListGroup } from 'react-bootstrap';

export default function List() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('Not found');

  useEffect(() => {
    tampilData();
  }, []);

  const tampilData = () => {
    return axios
      .get(api)
      .then((res) => {
        const respon = res.data.articles;
        setData(respon);
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        }
      });
  };
  console.log(data);
  const list = data.map((lis, i) => (
    <ListGroup.Item className="text-success text-start" key={i}>
      {lis.title}
    </ListGroup.Item>
  ));

  return (
    <div>
      <Container>
        <h1 className="mt-3">List News api</h1>
        {data.length === 0 ? (
          <p>{error}</p>
        ) : (
          <ListGroup variant="flush" numbered>
            {list}
          </ListGroup>
        )}
      </Container>
    </div>
  );
}
