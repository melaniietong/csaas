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
  amplitude: {
    name: 'Amplitude',
    location: 'us',
  },
  anthropic: {
    name: 'Anthropic',
    location: 'us',
  },
  apollo: {
    name: 'Apollo',
    location: 'us',
  },
  appcues: {
    name: 'Appcues',
    location: 'us',
  },
  auth0: {
    name: 'Auth0',
    location: 'us',
    parentCompany: {
      name: 'Okta',
      location: 'us',
    },
  },
  avalara: {
    name: 'Avalara',
    location: 'us',
    parentCompany: {
      name: 'Vista Equity Partners',
      location: 'us',
    },
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
  axiom: {
    name: 'Axiom',
    location: 'us',
    parentCompany: {
      name: 'Roper Technologies',
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
  baremetrics: {
    name: 'Baremetrics',
    location: 'us',
  },
  braintrust: {
    name: 'Braintrust',
    location: 'us',
  },
  breadcrumbs: {
    name: 'Breadcrumbs.io',
    location: 'us',
  },
  brightback: {
    name: 'Brightback',
    location: 'us',
  },
  bugsnag: {
    name: 'Bugsnag',
    location: 'us',
  },
  clay: {
    name: 'Clay',
    location: 'us',
  },
  clearbit: {
    name: 'Clearbit',
    location: 'us',
    parentCompany: {
      name: 'HubSpot',
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
  crazyEgg: {
    name: 'CrazyEgg',
    location: 'us',
  },
  crossbeam: {
    name: 'Crossbeam',
    location: 'us',
  },
  crunchyData: {
    name: 'Crunchy Data',
    location: 'us',
    parentCompany: {
      name: 'Snowflake',
      location: 'us',
    },
  },
  customerio: {
    name: 'Customer.io',
    location: 'us',
    parentCompany: {
      name: 'Peaberry Software Inc.',
      location: 'us',
    },
  },
  databricks_regionalized: {
    name: 'Databricks',
    location: 'regionalized',
  },
  datadog: {
    name: 'Datadog',
    location: 'us',
  },
  delighted: {
    name: 'Delighted',
    location: 'us',
    parentCompany: {
      name: 'Qualtrics',
      location: 'us',
    },
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
  enjoyhq: {
    name: 'EnjoyHQ',
    location: 'us',
    parentCompany: {
      name: 'UserZoom',
      location: 'us',
    },
  },
  esentire: {
    name: 'eSentire',
    location: 'ca',
  },
  facebook: {
    name: 'Facebook',
    location: 'us',
    parentCompany: {
      name: 'Meta',
      location: 'us',
    },
  },
  filestack: {
    name: 'FileStack',
    location: 'us',
    parentCompany: {
      name: 'Infragistics',
      location: 'us',
    },
  },
  fivetran: {
    name: 'Fivetran',
    location: 'us',
  },
  fullstory: {
    name: 'FullStory',
    location: 'us',
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
  gong: {
    name: 'Gong',
    location: 'us',
  },
  google: {
    name: 'Google',
    location: 'us',
  },
  grafana: {
    name: 'Grafana Labs',
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
  hightouch: {
    name: 'Hightouch',
    location: 'us',
  },
  hubspot: {
    name: 'HubSpot',
    location: 'us',
  },
  humio: {
    name: 'Humio',
    location: 'uk',
    parentCompany: {
      name: 'CrowdStrike',
      location: 'us',
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
  knock: {
    name: 'Knock',
    location: 'us',
  },
  lakera: {
    name: 'Lakera',
    location: 'ch',
  },
  launchDarkly: {
    name: 'LaunchDarkly',
    location: 'us',
  },
  linkedin: {
    name: 'LinkedIn',
    location: 'us',
    parentCompany: {
      name: 'Microsoft',
      location: 'us',
    },
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
  mavenAgi: {
    name: 'Maven AGI',
    location: 'us',
  },
  messagebird: {
    name: 'MessageBird',
    location: 'nl',
  },
  metabase: {
    name: 'Metabase',
    location: 'us',
  },
  microsoft: {
    name: 'Microsoft',
    location: 'us',
  },
  mimecast: {
    name: 'Mimecast',
    location: 'uk',
    parentCompany: {
      name: 'Permira',
      location: 'uk',
    },
  },
  mixpanel: {
    name: 'Mixpanel',
    location: 'us',
  },
  mongodb: {
    name: 'MongoDB',
    location: 'us',
  },
  netskope: {
    name: 'Netskope',
    location: 'us',
  },
  neverbounce: {
    name: 'NeverBounce',
    location: 'us',
    parentCompany: {
      name: 'ZoomInfo',
      location: 'us',
    },
  },
  newRelic: {
    name: 'New Relic',
    location: 'us',
    parentCompany: {
      name: 'Francisco Partners',
      location: 'us',
    },
  },
  onetrust: {
    name: 'OneTrust',
    location: 'us',
  },
  openai: {
    name: 'OpenAI',
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
  profitwell: {
    name: 'ProfitWell',
    location: 'us',
    parentCompany: {
      name: 'Paddle',
      location: 'uk',
    },
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
  retool: {
    name: 'Retool',
    location: 'us',
  },
  salesforce: {
    name: 'Salesforce',
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
  snowflake: {
    name: 'Snowflake',
    location: 'us',
  },
  spreedly: {
    name: 'Spreedly',
    location: 'us',
  },
  stitchData: {
    name: 'Stitch Data',
    location: 'us',
    parentCompany: {
      name: 'Talend',
      location: 'fr',
    },
  },
  stream: {
    name: 'Stream.io',
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
  sumoLogic: {
    name: 'Sumo Logic',
    location: 'us',
    parentCompany: {
      name: 'Francisco Partners',
      location: 'us',
    },
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
  typeform: {
    name: 'Typeform',
    location: 'es',
  },
  unbounce: {
    name: 'Unbounce',
    location: 'ca',
  },
  userpilot: {
    name: 'Userpilot',
    location: 'us',
  },
  wistia: {
    name: 'Wistia',
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
  workday: {
    name: 'Workday',
    location: 'us',
  },
  zendesk: {
    name: 'Zendesk',
    location: 'us',
  },
}

export { subprocessors }
