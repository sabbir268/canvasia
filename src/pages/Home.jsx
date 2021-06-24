import React, { Component } from "react";
import Header from "../component/Header";
import UploaderArea from "../component/UploaderArea";
import ImageContainer from "../component/ImageContainer";
import axios from "axios";
class Home extends Component {
  state = {
    files: [],
  };

  dragOver = (e) => {
    e.preventDefault();
  };

  dragEnter = (e) => {
    e.preventDefault();
  };

  dragLeave = (e) => {
    e.preventDefault();
  };

  fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    // const files = [...this.state.files, file];
    // console.log(file, files);
    this.uploadFileToServer(files[0]);
  };

  uploadFileToServer = (file) => {
    const form = new FormData();
    form.append("image", file);
    form.append("hello", "hola");
    console.log(form);
    axios
      .post(`http://localhost:8888`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="text-left col-md-8 offset-md-2 mt-5">
              <h3>Canvasia</h3>
              <div
                className="card rounded-lg"
                style={{ height: "70vh" }}
                onDragOver={this.dragOver}
                onDragEnter={this.dragEnter}
                onDragLeave={this.dragLeave}
                onDrop={this.fileDrop}
              >
                {this.state.files.length > 0 ? (
                  <ImageContainer></ImageContainer>
                ) : (
                  <div className="card-body h-100 text-center" id="dropZone">
                    <span>Drag Image</span>
                  </div>
                )}
                <div className="card-footer">
                  <div className="float-left mt-2">Upload Image</div>
                  <div className="float-right">
                    <UploaderArea></UploaderArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
