import { h, Fragment } from "preact";
import axios from "axios";
import { useState } from "preact/hooks";

const ImportComponent = () => {
  const [fileSelected, setFileSelected] = useState<File>();
  const [_uploadedFile, setUploadedFile] = useState({});
  const [filename, setFilename] = useState("");

  const onChange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;

    const fileList: File = (target.files as FileList)[0];

    if (!fileList) return;

    setFileSelected(fileList);
    setFilename(fileList.name);
  };

  const onSubmit = async (e: Event) => {
    alert("Your file blob was sent to the API.");
    e.preventDefault();

    if (fileSelected) {
      const formData = new FormData();
      formData.append("file", fileSelected);

      await axios
        .post(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/import`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const { fileName, filePath } = res.data;

          console.log(res);

          setUploadedFile({ fileName, filePath });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Fragment>
      <div class="box" id="grad">
        <section class="hero">
          <div class="hero-body">
            <p class="title" id="title">
              Import Data
            </p>
            <p class="subtitle" id="title">
              Upload a CSV File.
            </p>
          </div>
        </section>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="notification is-danger">
            <p>
              WARNING: Our PostgreSQL database is consistant in its use of
              snake_case naming conventions for identifiers. If you attempt to
              import prospect CSV data that does not consistantly use snake_case
              naming conventions for column names, then YMMV.
            </p>
          </div>
          <div class="box">
            <form onSubmit={onSubmit}>
              <div class="field">
                <div class="file is-info has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" onChange={onChange} />
                    <span class="file-cta">
                      <span class="file-label">Choose File…</span>
                    </span>
                    <span class="file-name">{filename}</span>
                  </label>
                </div>
              </div>
              <div class="field">
                <input type="submit" value="Upload" class="button is-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ImportComponent };
