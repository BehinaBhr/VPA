import { DocumentTitle} from '../../utils/utils';


function NotFound() {
  DocumentTitle("NotFound Page");
  return (
    <>
      <h2>Page Not Found</h2>
    </>
  );
}

export default NotFound;
