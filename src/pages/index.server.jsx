import NewsletterForm from '../components/NewsletterForm.client';

export default function Index({country = {isoCode: 'US'}}) {
  return <NewsletterForm />;
}
