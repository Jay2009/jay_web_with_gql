import { Select, Input, Table, Space, Tag, Button } from "antd";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import type { ColumnsType } from "antd/es/table";
import JayBtn from "../common/jayBtn";
import AddMarsPostModal from "../modal/addMarsPostModal";

interface DataType {
  key: string;
  title: string;
  writer: number;
  createdAt: string;
  tags: string[];
}
const { Option } = Select;

const MarsCommunityTable = () => {
  const onChangeRadio = (e: RadioChangeEvent) => {};

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isTitleClicked, setIsTitleClicked] = useState(false);

  const handleAdd = () => {
    setIsAddClicked(true);
  };
  const handleAddCancel = () => {
    setIsAddClicked(false);
  };

  // const handleUpdate = (key: string) => {
  //   console.log(key, "keyy");
  // };
  // const handleUpdateCancel = () => {};

  // const handleDelete = (key: string) => {
  //   console.log(key, "keyy");
  // };
  // const handleDeleteCancel = () => {};

  // const handleContentModal = () => {};
  // const handleContentModalCancel = () => {};

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "50px",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      width: "500px",
      render: (_, record) => (
        <Space size="middle">
          {/* <a onClick={handleContentModal}>{record.title}</a> */}
        </Space>
      ),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      align: "center",
      width: "200px",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Writer",
      dataIndex: "writer",
      key: "writer",
      align: "center",
      width: "150px",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      width: "100px",
    },
    {
      title: "Edit or Delete",
      key: "action",
      align: "center",
      width: "100px",
      render: (_, record) => (
        <Space size="middle">
          {/* <a onClick={() => handleDelete(record.key)}>Edit</a>
          <a>Delete</a> */}
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "3",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "5",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "6",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "7",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "8",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "9",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "10",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "11",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "12",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "13",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "14",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "15",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "16",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "17",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "18",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
    {
      key: "19",
      title: "John Brown",
      writer: 32,
      createdAt: "123123",
      tags: ["nice", "developer"],
    },
    {
      key: "20",
      title: "Jim Green",
      writer: 42,
      createdAt: "123123",
      tags: ["loser"],
    },
    {
      key: "21",
      title: "Joe Black",
      writer: 32,
      createdAt: "4444",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div className="whole-wrap">
      <div className="control-area">
        <div>Search</div>
        <div onClick={handleAdd}>Add post</div>
      </div>
      <AddMarsPostModal
        isModalOpen={isAddClicked}
        handleCancel={handleAddCancel}
      />
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        bordered
        pagination={{
          pageSize: 16,
          position: ["bottomCenter"],
          size: "default",
          showSizeChanger: false,
        }}
        style={{ width: "100%", height: "auto" }}
      />
      <style jsx>{`
        .whole-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .control-area {
          display: flex;
          justify-content: space-between;
          align-itmes: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default MarsCommunityTable;
