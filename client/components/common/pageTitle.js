const PageTitle = (props) => (
  <div className="row">
    <div className="col-md ">
      <div className="jumbotron">
        <h1 className="text-center">{props.pageTitle}</h1>
      </div>
    </div>
  </div>
);

export default PageTitle;