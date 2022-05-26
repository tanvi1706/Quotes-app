import { useParams } from "react-router-dom";
import { Fragment } from "react";

const QuoteDetail = () => {
    const params = useParams();
    return (
        <Fragment>
            <h2>Quote details</h2>
            <p>{params.quoteId}</p>
        </Fragment>
    );
};

export default QuoteDetail;