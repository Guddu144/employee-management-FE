import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';

import { fetchUsers } from '../../utils/apiClient';
import Table from '../Table';

const UserTable = () => {
  const [user,setUser]=useState()

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUser(data);
        console.log('success');
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const columns = useMemo(() =>
    [
      {
        Header: ('SN'),
        accessor: 'id',
      },
      {
        Header: ('Name'),
        accessor: 'name',
      },
      {
        Header: ('Phone Number'),
        accessor: 'phone',
      },
      {
        Header: ('Email'),
        accessor: 'email',
      },
    ], []);

  const table = useTable({ columns, data: user ?? [] });

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <Table
        {...table}
      />
    </div>
  );
};

export default UserTable;
