interface RenderListProp {
  data: any[];
  dataName: string;
  design: any;
}

function RenderList({ data, dataName, design: ItemComponent }: RenderListProp) {
  return (
    <>
      {data.map((item, i) => (
        <ItemComponent key={i} {...{ [dataName]: item }}/>
      ))}
    </>
  );
}

export default RenderList;
