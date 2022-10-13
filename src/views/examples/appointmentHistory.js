import React, { useState } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Row,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import { Container } from "reactstrap";
import { DataHTMLAttributes } from "react";
import PatientHeader from "components/Headers/Patient";

import axios from "api/axios";
import { useEffect } from "react";

const AppointmentHistory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  
  const nextPage = () => {
    if(currentPage !== nPages) setCurrentPage(currentPage + 1)
}
const prevPage = () => {
if(currentPage !== 1) setCurrentPage(currentPage - 1)
}

const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/api/v1/users");
        console.log(response);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const deleteuser=(id, e) => {  
    axios.delete(`/api/v1/users/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const posts =currentRecords.filter(item => item.id !== id);  
        setData(posts);  
      })  
    }

  return (
    <>
      <PatientHeader />

      <Container className="mt--5">
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Appointment's</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush table-striped"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Users Role</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                {loading && <div>Loading</div>}
                {!loading && (
                  <tbody>
                    {currentRecords.map((user) => (
                      <tr key={user.id} className="table-primary">
                        <td className="bg-danger">{user.id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.RoleId}</td>
                        <td>1000</td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                View
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Pending
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => deleteuser(user.id,e)}
                              >
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={prevPage}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                    {/* <PaginationItem className="active">
                      // <PaginationLink
                      //   href="#pablo"
                      //   onClick={(e) => e.preventDefault()}
                      // >
                      // {currentPage}
                     
                      // </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={(e) => e.preventDefault()}>
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem> */}
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={nextPage}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default AppointmentHistory;
