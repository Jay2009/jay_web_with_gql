import { Select, Input, Table, Space, Tag, Button, Modal } from "antd";
import { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import type { ColumnsType } from "antd/es/table";
import JayBtn from "../common/jayBtn";
import AddMarsPostModal from "../modal/addMarsPostModal";
import { ALL_POSTS, DELETE_POST } from "@/apollo/gqlQuery/user";
import { ICurrentUserData } from "@/types/iApollo";
import { GET_CURRENT_USER } from "@/apollo/cache";
import EditMarsPostModal from "../modal/editMarsPost";
import ConfirmModal from "../modal/confrimModal";

interface DataType {
  push(element: DataType): unknown;
  id: string;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  tags: string[];
}
interface IElement {
  [x: string]: string;
}
const { Option } = Select;

const MarsCommunityTable = () => {
  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser.data?.user;
  const [deletePost, {}] = useMutation(DELETE_POST);

  const { data, loading, error, refetch } = useQuery(ALL_POSTS);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [key, setKey] = useState("");
  const [deleteKey, setDeleteKey] = useState("");
  const [clickedEditData, setClickedEditData] = useState();
  const [clickedTitle, setClickedTitle] = useState<DataType>();
  const [selectVal, setSelectVal] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState<DataType[]>([]);

  const handleAdd = () => {
    setIsAddClicked(true);
    setSearchData([]);
  };
  const handleAddCancel = () => {
    setIsAddClicked(false);
  };

  const handleEdit = (key: string) => {
    const clickedData = data.allPost.find(
      (element: IElement) => element.id === key
    );
    setClickedEditData({
      ...clickedData,
    });
    setIsEditClicked(true);
    setSearchData([]);
  };
  const handleEditCancel = () => {
    setIsEditClicked(false);
  };

  const handleDelete = (key: string) => {
    setIsDeleteClicked(true);
    setDeleteKey(key);
    setSearchData([]);
  };
  const handleDeleteCancel = () => {
    setIsDeleteClicked(false);
  };

  const handleContentModal = (key: string) => {
    const clickedData = data.allPost.find(
      (element: IElement) => element.id === key
    );
    setClickedTitle({ ...clickedData });
    setKey(key);
    setIsTitleClicked(true);
  };
  const handleContentModalCancel = () => {
    setIsTitleClicked(false);
  };

  //search functions
  const handleSelect = (value: string) => {
    setSearchInput("");
    setSelectVal(value);
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setSearchInput(val);
  };
  const handleSelectTag = (value: string) => {
    setSearchInput(value);
  };

  const handleSearch = () => {
    let searchResult: DataType[] = [];
    let isFoundData: boolean = false;
    if (selectVal == "All") {
      setSearchData(data.allPost);
    }
    if (selectVal == "Title") {
      data.allPost.filter((element: DataType) => {
        if (element.title.includes(searchInput) == true) {
          searchResult.push(element);
          isFoundData = element ? true : false;
        }
      });
      isFoundData
        ? setSearchData(searchResult)
        : alert("Not found the result!");
    }
    if (selectVal == "Writer") {
      data.allPost.filter((element: DataType) => {
        if (element.writer.includes(searchInput) == true) {
          searchResult.push(element);
          isFoundData = element ? true : false;
        }
      });
      isFoundData
        ? setSearchData(searchResult)
        : alert("Not found the result!");
    }
    if (selectVal == "Tag") {
      data.allPost.filter((element: DataType) => {
        let test = element.tags.find((item) => item == searchInput);
        if (test && test.includes(searchInput) == true) {
          searchResult.push(element);
        }
      });
      setSearchData(searchResult);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "50px",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.id - b.id,
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
            {record?.writer == "admin" ? (
              <div
                style={{
                  width: "50px",
                  height: "20px",
                  border: "0.5px solid gray",
                  borderRadius: "5px",
                  fontSize: "11px",
                  opacity: "0.7",
                }}
              >
                Notice
              </div>
            ) : (
              ""
            )}
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
            let color;
            if (tag == "realEstate") {
              color = "green";
            }
            if (tag == "stock") {
              color = "geekblue";
            }
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
      render: (_, writer) => (
        <>
          {writer?.writer == "admin" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <div>{writer.writer}</div>
              <Image
                alt=""
                src="${prefix}/assets/star.png"
                width={15}
                height={15}
              />
            </div>
          ) : (
            <div>{writer.writer}</div>
          )}
        </>
      ),
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
          {user?.userId == record.writer || user?.authority == "admin" ? (
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

  return (
    <div className="whole-wrap">
      <div className="control-area">
        <div className="search-wrap">
          <span>Search by</span>
          <Select
            defaultValue="All"
            style={{ width: 100 }}
            onChange={handleSelect}
            options={[
              { value: "All", label: "All" },
              { value: "Title", label: "Title" },
              { value: "Writer", label: "Writer" },
              { value: "Tag", label: "Tag" },
            ]}
          />
          {selectVal == "Tag" ? (
            <Select
              style={{ width: 150 }}
              onChange={handleSelectTag}
              options={[
                { value: "stock", label: "Stock" },
                { value: "realEstate", label: "Real Estate" },
                { value: "others", label: "Others" },
              ]}
            />
          ) : (
            <Input
              placeholder="type keyword"
              onChange={handleChangeInput}
              value={searchInput}
              maxLength={10}
              style={{ width: 150 }}
              disabled={selectVal == "All" ? true : false}
            />
          )}

          <div className="btn search" onClick={handleSearch}>
            Search
          </div>
        </div>
        <div className="btn" onClick={handleAdd}>
          Add post
        </div>
      </div>
      {searchData.length > 0 ? (
        <Table
          columns={columns}
          rowKey="id"
          dataSource={searchData}
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
      ) : (
        <Table
          columns={columns}
          rowKey="id"
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
      )}

      <AddMarsPostModal
        isModalOpen={isAddClicked}
        handleCancel={handleAddCancel}
        refetch={refetch}
      />
      <EditMarsPostModal
        isModalOpen={isEditClicked}
        handleCancel={handleEditCancel}
        clickedEditData={clickedEditData ? clickedEditData : null}
        refetch={refetch}
      />
      {/* This is for delete modal */}
      <ConfirmModal
        msg="Are you sure to delete the post?"
        gqlFn={deletePost}
        destroyAll={handleDeleteCancel}
        bakedData={deleteKey ? deleteKey : ""}
        showModal={isDeleteClicked}
        handleClose={handleDeleteCancel}
        refetchData={refetch}
      />
      {/* This modal is for looking up at the content */}
      <Modal
        title={"\u00A0" + clickedTitle?.title}
        centered={true}
        open={isTitleClicked}
        onCancel={handleContentModalCancel}
        width={800}
        footer
      >
        <div className="show-content">{clickedTitle?.content}</div>
        <div className="tag-and-writer">
          <div className="tags">
            {clickedTitle?.tags.map((tag: string) => (
              <div key={tag}># {tag}</div>
            ))}
          </div>
          <div>Created by - {clickedTitle?.writer}</div>
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
        .search {
          width: 60px;
          background-color: #303030;
          font-size: 14px;
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
          align-items: center;
          margin-bottom: 20px;
        }
        .search-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          text-align: center;
        }
        .search-wrap:first-child {
          white-space: nowrap;
        }
        .show-content {
          background: #151b23;
          padding: 10px;
          border-radius: 10px;
          min-height: 100px;
          margin-bottom: 10px;
          white-space: pre-wrap;
          color: #a4a4a4;
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
