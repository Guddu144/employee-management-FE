import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';

import { deleteEmployee, fetchEmployees } from '../../utils/apiClient';
import Table from '../Table';


const EmployeeTable = () => {
  const [employee,setEmployee]=useState()
  console.log(employee)

  useEffect(() => {
    fetchEmployees()
      .then((data) => {
        setEmployee(data);
        console.log('success');
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const columns = useMemo(() =>
    [
      {
        Header: ('SN'),
        accessor: 'id',
      },
      {
        Header: ('Title'),
        accessor: 'title',
      },
      {
        Header: ('Name'),
        accessor: 'user.name',
      },
      {
        Header: ('Phone Number'),
        accessor: 'user.phone',
      },
      {
        Header: ('Email'),
        accessor: 'user.email',
      },
      {
        Header: ('Yearly Salary'),
        accessor: 'yearly_salary',
      },
      {
        Header: 'Actions',
        id: 'actions',
        Cell: ({ row: { original } }) => {
          return (
            <div className="space-x-3">
                <button
                 onClick={() => {
                  if (window.confirm('Are you sure?')) {
                    deleteEmployee(original.user.id).then(data => {
                      location.reload();
                    });
                  }
                }}
                className="w-5 h-5 text-red-400 hover:text-red-500" >
                  Delete
                </button>
            </div>
          );
        },
      },
    ], []);

  const table = useTable({ columns, data: employee ?? [] });

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <Table
        {...table}
      />
    </div>
  );
};

export default EmployeeTable;
