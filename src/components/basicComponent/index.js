const BasicComponent = ({ name }) => {
  if (!name) {
    return null;
  }

  return <div>{`Hello, ${name}`}</div>;
};

export default BasicComponent;
