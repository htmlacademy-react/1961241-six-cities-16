import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Helmet>
        <title>Not Found Page</title>
      </Helmet>
      <h1 style={{ fontSize: '36px', margin: '20px 0' }}>
        404 - Страница не найдена
      </h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        К сожалению, страница, которую вы ищете, не существует.
      </p>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={() => window.history.back()}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
