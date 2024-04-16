import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston"];
  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <span>hey</span>
      </Alert>
    </div>
  );
}

export default App;
