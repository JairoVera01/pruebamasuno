import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Steps />
        <h1>App</h1>
      </Layout>
    </>
  );
}

export default App;
