import { Comment } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div data-testid="loader">
      <Comment
        visible={true}
        height="200"
        width="200"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#7dafd6"
        backgroundColor="#4674f3"
      />
    </div>
  );
};

export default Loader;
