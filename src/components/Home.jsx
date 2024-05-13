"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import toast from "react-hot-toast";
function calculatePercentage(totalCount, notFoundCount) {
  const percentage = Math.ceil((notFoundCount / totalCount) * 100) || 0;
  const color = percentage < 12 ? "green" : "red";
  return { percentage: `${percentage} %`, color };
}
const columns = [
  {
    title: "Plat form",
    dataIndex: "plat_form",
    key: "plat_form",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Total Url Count",
    dataIndex: "total_count",
    key: "total_count",
  },
  {
    title: "Not Found Urls",
    dataIndex: "not_found_count",
    key: "not_found_count",
    render: (not_found_count) => (
      <>
        {not_found_count && (
          <Tag color={"red"} key={"red"}>
            {not_found_count}
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "Found Urls",
    dataIndex: "found_count",
    key: "found_count",
    render: (found_count) => (
      <>
        {found_count && (
          <Tag color={"green"} key={"green"}>
            {found_count}
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "Threshold ",
    dataIndex: "threshold",
    key: "threshold",
    render: (_, record) => {
      const { total_count, not_found_count } = record;
      const { percentage, color } = calculatePercentage(
        total_count,
        not_found_count
      );

      return (
        <>
          {record.found_count && (
            <Tag color={color} key={record.found_count}>
              {percentage}
            </Tag>
          )}
        </>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <button
        size="middle"
        onClick={() => toast.success(`Crawl Started For ${record.plat_form}`)}
      >
        Start Crawl
      </button>
    ),
  },
];
const data = [
  {
    plat_form: "Amazon",
    total_count: 100,
    not_found_count: 10,
    found_count: 90,
    key: "1",
  },
  {
    plat_form: "eBay",
    total_count: 150,
    not_found_count: 30,
    found_count: 120,
    key: "2",
  },
  {
    plat_form: "Alibaba",
    total_count: 200,
    not_found_count: 20,
    found_count: 180,
    key: "3",
  },
  {
    plat_form: "Etsy",
    total_count: 180,
    not_found_count: 25,
    found_count: 155,
    key: "4",
  },
  {
    plat_form: "Shopify",
    total_count: 220,
    not_found_count: 35,
    found_count: 185,
    key: "5",
  },
  {
    plat_form: "Walmart",
    total_count: 170,
    not_found_count: 15,
    found_count: 155,
    key: "6",
  },
  {
    plat_form: "Target",
    total_count: 190,
    not_found_count: 20,
    found_count: 170,
    key: "7",
  },
  {
    plat_form: "Best Buy",
    total_count: 210,
    not_found_count: 30,
    found_count: 180,
    key: "8",
  },
  {
    plat_form: "ASOS",
    total_count: 230,
    not_found_count: 25,
    found_count: 205,
    key: "9",
  },
  {
    plat_form: "Zappos",
    total_count: 250,
    not_found_count: 50,
    found_count: 200,
    key: "10",
  },
  {
    plat_form: "Newegg",
    total_count: 300,
    not_found_count: 60,
    found_count: 240,
    key: "11",
  },
  {
    plat_form: "Wayfair",
    total_count: 270,
    not_found_count: 40,
    found_count: 230,
    key: "12",
  },
  {
    plat_form: "Overstock",
    total_count: 320,
    not_found_count: 70,
    found_count: 250,
    key: "13",
  },
  {
    plat_form: "Rakuten",
    total_count: 350,
    not_found_count: 80,
    found_count: 270,
    key: "14",
  },
  {
    plat_form: "AliExpress",
    total_count: 380,
    not_found_count: 90,
    found_count: 290,
    key: "15",
  },
];

console.log(data);

const Home = () => (
  <>
    <p className="text-5xl font-bold py-20 px-10">Crawl Dashboard</p>
    <Table loading columns={columns} dataSource={data} />
  </>
);
export default Home;
