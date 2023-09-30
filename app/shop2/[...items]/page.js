export default function Page({ params }) {
  const [one] = params.items;

  return <h1>All sub-tree: {one}</h1>;
}
