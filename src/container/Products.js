import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { setProductLimit } from '../actions';
import { requestProducts } from '../thunks/listItems';
import Header from '../Header';
import Pagination from "react-bootstrap/Pagination";

export default function Products() {
  const { products, filter } = useSelector((state) => state.getProduct.product)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch(setProductLimit({ [name]: value }));
  };
  const handlePageChange = (page) => {
    dispatch(setProductLimit({ page: page + filter.page }));
  };


  useEffect(() => {
    dispatch(requestProducts(filter))

  }, [dispatch, filter])

  return (
    <>
      <Header />
      <h1>Products</h1>
      <select name="limit" value={filter.limit} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cost}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          disabled={filter.page === 1}
          onClick={() => handlePageChange(-1)}
        />
        <Pagination.Item>{filter.page}</Pagination.Item>
        <Pagination.Next
          disabled={filter.page === filter.pages}
          onClick={() => handlePageChange(1)}
        />
      </Pagination>
    </>

  )
}