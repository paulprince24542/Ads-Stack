export enum EnquiryStatus {
  CREATED = 'CREATED',
  INSPECTION_SCHEDULED = 'INSPECTION SCHEDULED',
  INSPECTION_RESCHEDULED = 'INSPECTION RESCHEDULED',
  WORK_SCHEDULED = 'WORK SCHEDULED',
  WORK_RESCHEDULED = 'WORK RESCHEDULED',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

export enum EnquirySource {
  WEBSITE = 'website',
  FACEBOOK = 'facebook',
  GOOGLE_ADS = 'google_ads',
  LINKEDIN = 'linkedin',
  WHATSAPP = 'whatsapp',
  REFERRAL = 'referral',
  PARTNER = 'partner',
  MANUAL = 'MANUAL',
}
