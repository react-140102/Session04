import { Table, Pagination, Checkbox } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useFetchData } from "../hooks/useFetchData";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

function genColumn(name: string) {
  return {
    title: name,
    dataIndex: name,
    key: name,
  };
}
const columns: ColumnsType<Todo> = [
  {
    ...genColumn("id"),
  },
  {
    ...genColumn("userId"),
    title: "User Id",
  },
  {
    ...genColumn("title"),
  },
  {
    ...genColumn("completed"),
    render: (completed: boolean) => (
      <Checkbox disabled defaultChecked={completed} />
    ),
  },
];

export const Todos = () => {
  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Todo>("todos");

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        defaultCurrent={page}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        total={total}
      ></Pagination>
    </>
  );
};
