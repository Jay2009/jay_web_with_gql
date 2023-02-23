import { Select, Input, Table, Space, Tag, Button, Modal } from "antd";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import type { ColumnsType } from "antd/es/table";
import JayBtn from "../common/jayBtn";
import AddMarsPostModal from "../modal/addMarsPostModal";
import { ALL_POSTS } from "@/apollo/gqlQuery/user";
import { ICurrentUserData } from "@/types/iApollo";
import { GET_CURRENT_USER } from "@/apollo/cache";
import EditMarsPostModal from "../modal/editMarsPost";

interface DataType {
  id: string;
  title: string;
  writer: string;
  createdAt: string;
  tags: string[];
}
interface ITest {
  [x: string]: string;
}
const { Option } = Select;

const MarsCommunityTable = () => {
  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser.data?.user;
  const { data, loading, error, refetch } = useQuery(ALL_POSTS);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [key, setKey] = useState("");
  const [clickedPost, setClickedPost] = useState();

  const handleAdd = () => {
    setIsAddClicked(true);
  };
  const handleAddCancel = () => {
    setIsAddClicked(false);
  };

  const handleEdit = (key: string) => {
    const clickedData = data.allPost.find(
      (element: ITest) => element.id === key
    );
    console.log(clickedData, "Clicked Dataaaaaaa@@@@@");

    setClickedPost({
      ...clickedData,
    });
    setIsEditClicked(true);
  };
  const handleEditCancel = () => {
    setIsEditClicked(false);
  };

  const handleDelete = (key: string) => {
    console.log(key, "key and delete");
  };
  // const handleDeleteCancel = () => {};

  const handleContentModal = (key: string) => {
    console.log(key);
    setKey(key);
    setIsTitleClicked(true);
  };
  const handleContentModalCancel = () => {
    setIsTitleClicked(false);
  };

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
        <>
          <Space size="middle">
            <a onClick={() => handleContentModal(record.id)}>{record.title}</a>
          </Space>
        </>
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
            let color = tag.length > 7 ? "green" : "geekblue";
            if (tag === "others") {
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
          {user?.userId == record.writer ? (
            <div>
              <a onClick={() => handleEdit(record.id)}>Edit</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a onClick={() => handleDelete(record.id)}>Delete</a>
            </div>
          ) : (
            ""
          )}
        </Space>
      ),
    },
  ];

  // const mockData: DataType[] = [
  //   {
  //     id: "1",
  //     title: "John Brown",
  //     writer: 32,
  //     createdAt: "123123",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     id: "2",
  //     title: "Jim Green",
  //     writer: 42,
  //     createdAt: "123123",
  //     tags: ["loser"],
  //   },
  //   {
  //     id: "3",
  //     title: "Joe Black",
  //     writer: 32,
  //     createdAt: "4444",
  //     tags: ["cool", "teacher"],
  //   },
  //   {
  //     id: "4",
  //     title: "John Brown",
  //     writer: 32,
  //     createdAt: "123123",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     id: "5",
  //     title: "Jim Green",
  //     writer: 42,
  //     createdAt: "123123",
  //     tags: ["loser"],
  //   },
  // ];

  return (
    <div className="whole-wrap">
      <div className="control-area">
        <div>Search</div>
        <div className="btn" onClick={handleAdd}>
          Add post
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data?.allPost ? data.allPost : ""}
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
      <AddMarsPostModal
        isModalOpen={isAddClicked}
        handleCancel={handleAddCancel}
        refetch={refetch}
      />
      <EditMarsPostModal
        isModalOpen={isEditClicked}
        handleCancel={handleEditCancel}
        clickedPost={clickedPost ? clickedPost : null}
        refetch={refetch}
      />
      {/* This modal is for looking up at the content */}
      <Modal
        title={"Title - " + data?.allPost[key]?.title}
        centered={true}
        open={isTitleClicked}
        onCancel={handleContentModalCancel}
        width={800}
        footer
      >
        <div className="show-content">{data?.allPost[key]?.content}</div>
        <div className="tag-and-writer">
          <div className="tags">
            {data?.allPost[key]?.tags.map((tag: string) => (
              <div key={tag}># {tag}</div>
            ))}
          </div>
          <div>Created by - {data?.allPost[key]?.writer}</div>
        </div>
      </Modal>
      <style jsx>{`
        .btn {
          display: flex;
          width: 100px;
          color: white;
          justify-content: center;
          align-items: center;
          background-color: #3369aa;
          border-radius: 3px;
          height: 35px;
          opacity: 0.8;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          outline: none;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
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
        .show-content {
          background: #151b23;
          padding: 10px;
          border-radius: 10px;
          min-height: 100px;
          margin-bottom: 10px;
          white-space: pre-wrap;
        }
        .tag-and-writer {
          display: flex;
          justify-content: space-between;
          algin-itmes: center;
        }
        .tags {
          display: flex;
          gap: 10px;
          color: gray;
        }
      `}</style>
    </div>
  );
};

export default MarsCommunityTable;
