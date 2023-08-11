import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Technologies from "./components/Technologies";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Steps />
        <Technologies />
      </Layout>
    </>
  );
}

export default App;
