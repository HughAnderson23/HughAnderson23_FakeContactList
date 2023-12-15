import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Photo from "/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_13.jpg";

export const ContactCard = (props) => {
  const navigate = useNavigate();

  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img src={Photo} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
          <div className=" float-right">
            {/* Use navigate directly instead of Link */}
            <button className="btn" onClick={() => navigate("/add")}>
              <i className="fas fa-pencil-alt mr-3" />
            </button>
            <button className="btn" onClick={() => props.onDelete()}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <label className="name lead">{props.item.full_name}</label>
          <br />
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <span className="text-muted">{props.item.address}</span>
          <br />
          <span
            className="fa fa-phone fa-fw text-muted mr-3"
            data-toggle="tooltip"
            title=""
            data-original-title="(870) 288-4149"
          />
          <span className="text-muted small">{props.item.phone}</span>
          <br />
          <span
            className="fa fa-envelope fa-fw text-muted mr-3"
            data-toggle="tooltip"
            data-original-title=""
            title=""
          />
          <span className="text-muted small text-truncate">{props.item.email}</span>
        </div>
      </div>
    </li>
  );
};

ContactCard.propTypes = {
  onDelete: PropTypes.func,
  item: PropTypes.object,
  edit: PropTypes.func,
};

ContactCard.defaultProps = {
  onDelete: null,
};

export default ContactCard;
