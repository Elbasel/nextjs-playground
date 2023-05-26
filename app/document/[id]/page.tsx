interface DocumentPageProps {
  params: {
    id: string;
  };
}

const DocumentPage: React.FC<DocumentPageProps> = ({ params: { id } }) => {
  return (
    <main>
      <h1>Dynamic Routing</h1>
      <h2>Document {id}</h2>
    </main>
  );
};

export default DocumentPage;
