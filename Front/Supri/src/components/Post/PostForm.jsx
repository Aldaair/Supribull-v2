import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../../Services/PostService";
function PostForm() {
  const navigate = useNavigate();

  const initialState = { titulo: "", descripcion: "", idUsuario: 0 };

  const [posts, setPosts] = useState(initialState);

  const handleInputChange = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;

      res = await registerPost(posts);
      const data = await res.json();

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  /*  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="titulo"
            value={posts.titulo}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="50"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="descripcion"
            value={posts.descripcion}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">idUsuario</label>
          <input
            type="number"
            name="idUsuario"
            value={posts.idUsuario}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block btn-success">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
