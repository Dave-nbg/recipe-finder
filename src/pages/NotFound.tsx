import { useTranslation } from "react-i18next";

function NotFoundPage() {
    const { t } = useTranslation('notFound');

    return (
        <main>
            <h1>404 - {t('page_not_found')}</h1>
            <p>{t('searched_page_not_found')}</p>
        </main>
    );
}

export default NotFoundPage;