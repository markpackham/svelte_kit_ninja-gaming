export async function get(req, res, next) {
  // connect to db & get data (variable used in this example)

  const guides = [
    { id: 1, title: "a title" },
    { id: 2, title: "a title 2" },
    { id: 3, title: "a title 3" },
    { id: 4, title: "a title 4" },
    { id: 5, title: "a title 5" },
  ];

  return {
    status: 200,
    body: { guides },
  };
}
