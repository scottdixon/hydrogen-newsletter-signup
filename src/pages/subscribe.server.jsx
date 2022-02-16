import NewsletterForm from '../components/NewsletterForm.client';
import Shopify, {DataType} from '@shopify/shopify-api';

export default function Subscribe({country = {isoCode: 'US'}}) {
  return <NewsletterForm />;
}

export async function api(request) {
  const {SHOPIFY_SHOP, SHOPIFY_ACCESS_TOKEN} = Oxygen.env;
  const client = new Shopify.Clients.Rest(SHOPIFY_SHOP, SHOPIFY_ACCESS_TOKEN);
  try {
    const {email} = await request.json();
    await client.post({
      path: 'customers',
      data: {
        customer: {
          email,
          accepts_marketing: true,
        },
      },
      type: DataType.JSON,
    });
    return new Response(null);
  } catch (e) {
    return new Response(null, {status: e.code});
  }
}
