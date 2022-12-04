import React from "react";
import { deletePost } from "../../Services/PostService";
function PostItem({ post, listPosts }) {
  const handleDelete = (id) => {
    deletePost(id);
    listPosts();
  };

  return (
    <div className="container">
      <div className="col-md-4 mb-4">
        <div className="card card-body">
          <h3 className="card-title">{post.titulo}</h3>
          <p className="card-text">
            Escrito por Anónimo<strong>{post.idUsuario}</strong>
          </p>
          <p>
            <strong>{post.descripcion}</strong>
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning"
          >
            Nuevo comentario
          </a>
          <button
            onClick={() =>
              post.idPublicacion && handleDelete(post.idPublicacion)
            }
            className="btn btn-danger my-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
