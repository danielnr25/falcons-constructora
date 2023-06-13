import BlogList from "../../components/blog/BlogList";
import Layout from "../../hocs/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="lg:py-10 space-y-12 bg-slate-100">
        <h1 className="text-center text-black font-bold md:text-3xl text-2xl my-5">
          Nuestros blog de noticias
        </h1>
        <div className="flex justify-between lg:px-10 px-4 items-center">
          <h1 className="text-black text-2xl font-bold md:text-3xl">
            Publicaciones Recientes
          </h1>
          <button className="underline py-1.5 px-3 md:py-2 md:px-3 font-semibold text-black rounded-lg  hover:text-indigo-600">
            Ver más
          </button>
        </div>
      </div>
      <BlogList />
    </Layout>
  );
};

export default Blog;
