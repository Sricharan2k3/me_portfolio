"use client"
import React, { useEffect, useState } from 'react';
// import './MediumArticles.css';
import axios from "axios";

const url = "https://api.rss2json.com/v1/api.json?rss\_url=https://medium.com/feed/@namasricharan";

function MediumArticles() {
  const [articleData, setArticleData] = useState(null);

  const getData = async () => {
    await axios.get(url)
      .then((response) => {
        setArticleData(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData();
  },
    [])

  return (
    <div className="MediumArticles" style={{ margin: "5vh 0", color: "#232E44" }}>
      {
        articleData !== null ?
          <div>
            <div className="container">
              <div className="row">
                {articleData.map((item, index) => {
                  return (
                    <div key={index} className="col-sm-3">
                      <div className="card" style={{ height: "45vh", margin: "1vh" }}>
                        <a href={item.link} target="_blank">
                          <div style={{
                            backgroundImage: `url("${item.thumbnail}")`,
                            height: "20vh",
                            borderRadius: "0.375rem 0.375rem 0 0",
                            backgroundSize: "100%"
                          }}>
                          </div>
                        </a>
                        <div className="card-body" style={{ overflow: "scroll", height: "14vh" }}>
                          <h5 className="card-title">
                            <a href={item.url} target="_blank" rel="noreferrer"
                              style={{
                                color: "#2463EB",
                                fontSize: "1rem",
                                textDecoration: "none",
                                fontWeight: "700"
                              }}> {item.title}
                            </a>
                          </h5>
                          <div style={{}}>
                            {item.categories.map((item_, index) => {
                              return (
                                <a style={{
                                  color: "#3d7100d4",
                                  fontSize: "1.6vh",
                                  textDecoration: "none"
                                }}
                                  href={`https://medium.com/tag/${item_}`}
                                  target="_blank">#{item_}, </a>
                              )
                            })}
                          </div>
                          <div className="d-grid gap-2">
                            <a href={articleData.url}
                              className="btn btn-outline-primary"
                              target="_blank" rel="noreferrer">Read</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div> : <span />
      }
    </div>
  )
}

export default MediumArticles;