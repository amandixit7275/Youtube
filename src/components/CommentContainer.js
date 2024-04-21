import React from "react";

const commentsData = [
  {
    name: "Aman Dixit ",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    replies: [
      {
        name: "Salmon Khana",
        comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Chiriyanka Popra",
            comment:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Nalia bhat",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Peedika Dadukone",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                replies: [],
              },
            ],
          },
          {
            name: "Aman",
            comment:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            replies: [],
          },
        ],
      },
      {
        name: "Aman",
        comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Salmon Khana",
            comment:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Chiriyanka Popra",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                replies: [
                  {
                    name: "Nalia bhat",
                    comment:
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Peedika Dadukone",
                    comment:
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                ],
              },
              {
                name: "Aman",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Aman",
        comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        replies: [],
      },
    ],
  },
  {
    name: "Aman",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Aman",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Aman",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Aman",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
];

function Comment({ data }) {
  const { name, comment, replies } = data;

  console.log(name);
  console.log(comment);
  return (
    <div className="flex items-center rounded-lg shadow-sm bg-gray-100 my-2 ">
      <img
        className="h-10 w-10"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="user"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
}

function CommentList({ comments }) {
  return comments?.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-4 border border-l-black ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
}

function CommentContainer() {
  return (
    <div className="m-5 p-2   ">
      <h1 className="font-bold text-2xl p-3">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentContainer;
