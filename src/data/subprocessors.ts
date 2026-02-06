import type { SubprocessorData } from '@/types/subprocessor'

const subprocessors: Record<string, SubprocessorData> = {
  activeCampaign: {
    name: 'ActiveCampaign',
    location: 'us',
  },
  adyen: {
    name: 'Adyen',
    location: 'nl',
  },
  aha: {
    name: 'Aha.io',
    location: 'us',
  },
  airbrake: {
    name: 'Airbrake',
    location: 'us',
    parentCompany: {
      name: 'LogicMonitor',
      location: 'us',
    },
  },
  appcues: {
    name: 'Appcues',
    location: 'us',
  },
  aws: {
    name: 'Amazon Web Services',
    location: 'us',
    parentCompany: {
      name: 'Amazon',
      location: 'us',
    },
  },
  aws_regionalized: {
    name: 'Amazon Web Services',
    location: 'regionalized',
    parentCompany: {
      name: 'Amazon',
      location: 'us',
    },
  },
  azure_regionalized: {
    name: 'Microsoft Azure',
    location: 'regionalized',
    parentCompany: {
      name: 'Microsoft',
      location: 'us',
    },
  },
  cloudflare: {
    name: 'Cloudflare',
    location: 'us',
  },
  cloudStrap: {
    name: 'CloudStrap',
    location: 'bg',
  },
  bugsnag: {
    name: 'Bugsnag',
    location: 'us',
  },
  databricks_regionalized: {
    name: 'Databricks',
    location: 'regionalized',
  },
  datadog: {
    name: 'Datadog',
    location: 'us',
  },
  dreamdata: {
    name: 'Dreamdata',
    location: 'us',
  },
  elasticsearch: {
    name: 'Elasticsearch',
    location: 'us',
    parentCompany: {
      name: 'Elastic',
      location: 'us',
    },
  },
  elavon_canada: {
    name: 'Elavon Canada',
    location: 'ca',
    parentCompany: {
      name: 'U.S. Bank',
      location: 'us',
    },
  },
  elavon_us: {
    name: 'Elavon',
    location: 'us',
    parentCompany: {
      name: 'U.S. Bank',
      location: 'us',
    },
  },
  gcp: {
    name: 'Google Cloud',
    location: 'us',
    parentCompany: {
      name: 'Google',
      location: 'us',
    },
  },
  gcp_canada: {
    name: 'Google Cloud Canada',
    location: 'ca',
    parentCompany: {
      name: 'Google',
      location: 'us',
    },
  },
  google: {
    name: 'Google',
    location: 'us',
  },
  hetzner: {
    name: 'Hetzner',
    location: 'de',
    parentCompany: {
      name: 'ENSoXX Holding AG',
      location: 'de',
    },
  },
  infinicept: {
    name: 'Infinicept',
    location: 'us',
  },
  intercom: {
    name: 'Intercom',
    location: 'us',
  },
  intercom_rd: {
    name: 'Intercom R&D',
    location: 'us',
  },
  justt: {
    name: 'Justt',
    location: 'il',
  },
  klaviyo: {
    name: 'Klaviyo',
    location: 'us',
  },
  looker: {
    name: 'Looker Data Sciences',
    location: 'us',
    parentCompany: {
      name: 'Google',
      location: 'us',
    },
  },
  mailchimp: {
    name: 'Mailchimp',
    location: 'us',
    parentCompany: {
      name: 'Intuit',
      location: 'us',
    },
  },
  mailgun: {
    name: 'Mailgun',
    location: 'us',
    parentCompany: {
      name: 'Sinch',
      location: 'se',
    },
  },
  marsello: {
    name: 'Marsello',
    location: 'nz',
  },
  messagebird: {
    name: 'MessageBird',
    location: 'nl',
  },
  metabase: {
    name: 'Metabase',
    location: 'us',
  },
  pendo: {
    name: 'Pendo',
    location: 'us',
  },
  productboard: {
    name: 'ProductBoard',
    location: 'us',
  },
  propay: {
    name: 'ProPay',
    location: 'us',
    parentCompany: {
      name: 'TSYS',
      location: 'us',
    },
  },
  pusher: {
    name: 'Pusher',
    location: 'gb',
    parentCompany: {
      name: 'MessageBird',
      location: 'nl',
    },
  },
  qualtrics: {
    name: 'Qualtrics',
    location: 'us',
  },
  salesforce_canada: {
    name: 'Salesforce Canada',
    location: 'ca',
    parentCompany: {
      name: 'Salesforce',
      location: 'us',
    },
  },
  segment: {
    name: 'Segment',
    location: 'us',
    parentCompany: {
      name: 'Twilio',
      location: 'us',
    },
  },
  sendgrid: {
    name: 'SendGrid',
    location: 'us',
    parentCompany: {
      name: 'Twilio',
      location: 'us',
    },
  },
  sentry: {
    name: 'Sentry',
    location: 'us',
    parentCompany: {
      name: 'Functional Software, Inc.',
      location: 'us',
    },
  },
  seon: {
    name: 'Seon',
    location: 'us',
  },
  sisense: {
    name: 'Sisense',
    location: 'us',
  },
  spreedly: {
    name: 'Spreedly',
    location: 'us',
  },
  stripe: {
    name: 'Stripe',
    location: 'us',
  },
  stripe_regionalized: {
    name: 'Stripe',
    location: 'regionalized',
  },
  timekit: {
    name: 'Timekit',
    location: 'us',
    parentCompany: {
      name: 'Tulip',
      location: 'ca',
    },
  },
  tsys: {
    name: 'TSYS',
    location: 'us',
    parentCompany: {
      name: 'Fidelity National Information Services',
      location: 'us',
    },
  },
  twilio: {
    name: 'Twilio',
    location: 'us',
  },
  wootric: {
    name: 'Wootric',
    location: 'us',
    parentCompany: {
      name: 'InMoment',
      location: 'us',
    },
  },
  zendesk: {
    name: 'Zendesk',
    location: 'us',
  },
}

export { subprocessors }
