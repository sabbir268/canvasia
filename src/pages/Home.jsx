import React, { Component } from "react";
import Header from "../component/Header";
import UploaderArea from "../component/UploaderArea";
import ImageContainer from "../component/ImageContainer";
import axios from "axios";
class Home extends Component {
  state = {
    files: [],
    singleFile: null,
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
    let image = URL.createObjectURL(files[0]);
    this.setState({ singleFile: image });
    console.log("file", image);
    // this.uploadFileToServer(files[0]);
  };

  uploadFileToServer = (file) => {
    const form = new FormData();
    form.append("image", file);
    form.append("hello", "hola");
    console.log(form);
    axios
      .post(`http://localhost:8888/upload`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        let files = [...this.state.files, result.data];
        this.setState({ files });
      })
      .catch((error) => console.log("error", error));
  };

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:8888/get-all`)
  //     .then((result) => {
  //       let files = [...this.state.files, ...result.data];
  //       this.setState({ files });
  //     })
  //     .catch((error) => console.log("error", error));
  // }
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
                <div className="h-100">
                  <div className="row m-2">
                    {this.state.files.length > 0 ? (
                      this.state.files.map((img) => {
                        return <ImageContainer image={img}></ImageContainer>;
                      })
                    ) : (
                      <div className="card-body text-center" id="dropZone">
                        <span>Drag Image</span>
                      </div>
                    )}
                  </div>
                  <img src={this.state.singleFile} alt="" />
                </div>
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
