

export default function NewsItem(props) {
  let defaultImageUrl =
      "https://s.yimg.com/os/creatr-uploaded-images/2022-09/4676a920-40ea-11ed-8dfe-961556188d53";


    return (
      <div className="container card" style={{ width: "20rem" }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {props.source ? props.source : "unknown"}
          <span class="visually-hidden">unread messages</span>
        </span>{" "}
        <img
          src={props.urlToImage ? props.urlToImage : defaultImageUrl}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.description}</p>
          <p class="card-text">
            <small className="text-muted">
              by {props.writer ? props.writer : "unknown"} at{" "}
              {props.publishedAt
                ? new Date(props.publishedAt).toGMTString()
                : "not known"}
            </small>
          </p>
          <a href={props.url} className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
}

// export class NewsItem extends Component {
//   render() {
//     let defaultImageUrl =
//       "https://s.yimg.com/os/creatr-uploaded-images/2022-09/4676a920-40ea-11ed-8dfe-961556188d53";

//     // let {title, description, urlToImage, newsUrl} = props;

//     return (
//       <div className="container card" style={{ width: "20rem" }}>
//         <span
//           className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
//           style={{ left: "90%", zIndex: "1" }}
//         >
//           {props.source ? props.source : "unknown"}
//           <span class="visually-hidden">unread messages</span>
//         </span>{" "}
//         <img
//           src={props.urlToImage ? props.urlToImage : defaultImageUrl}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.title} </h5>
//           <p className="card-text">{props.description}</p>
//           <p class="card-text">
//             <small className="text-muted">
//               by {props.writer ? props.writer : "unknown"} at{" "}
//               {props.publishedAt
//                 ? new Date(props.publishedAt).toGMTString()
//                 : "not known"}
//             </small>
//           </p>
//           <a href={props.url} className="btn btn-dark">
//             Read More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
