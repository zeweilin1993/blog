export interface IItemsConfig {
  label: string;
  icon: string;
  iconBlack?: string;
  path: string;
  meta?: {
    type: 'NAV' | 'SOCIAL';
  };
}
