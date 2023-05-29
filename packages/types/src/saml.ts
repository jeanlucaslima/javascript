export type SamlIdpSlug =
  | 'saml_okta'
  | 'saml_google'
  | 'saml_microsoft'
  | 'saml_jumpcloud'
  | 'saml_rippling'
  | 'saml_onelogin'
  | 'saml_custom';

export type SamlIdp = {
  name: string;
  logo: string;
};

export type SamlIdpMap = Record<SamlIdpSlug, SamlIdp>;

export const SAML_IDPS: SamlIdpMap = {
  saml_okta: {
    name: 'Okta Workforce',
    logo: 'okta',
  },
  saml_google: {
    name: 'Google Workspace',
    logo: 'google',
  },
  saml_microsoft: {
    name: 'Microsoft Azure AD',
    logo: 'azure',
  },
  saml_jumpcloud: {
    name: 'JumpCloud',
    logo: 'jumpcloud',
  },
  saml_rippling: {
    name: 'Rippling',
    logo: 'rippling',
  },
  saml_onelogin: {
    name: 'OneLogin',
    logo: 'onelogin',
  },
  saml_custom: {
    name: 'SAML',
    logo: 'saml',
  },
};
