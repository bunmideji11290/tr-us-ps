import { Package } from '@/utils/types';

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'Jeffrey Thomas hanks',
      address: '******',
      contact_number: '***-***-****',
      email: 'thmhanksjeff01003@gmail.com'
    },
    recipient: {
      name: 'Harriette schutsch',
      address: '4348 ridgedale avenue Las Vegas NV 89121',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'sample',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Envelope',
      quantity: '2',
      paymentMode: 'Credit Card',
      origin: 'England, UK',
      destination: 'Las Vegas, NV, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'International Shipping',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-26',
    package_received_time: '19:35:00',
    in_transit_date: '2025-05-27',
    in_transit_time: '21:00:00',
    out_for_delivery_date: '2025-06-03',
    out_for_delivery_time: '14:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-06-03',
    estimated_delivery_time: '23:35:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG002',
    sender: {
      name: 'Samantha Isabella Gabriella',
      address: '******',
      contact_number: '***-***-****',
      email: '******'
    },
    recipient: {
      name: 'Chad Mills',
      address: '200 W JACKSON ST APT 613 PAINESVILLE, OH 44077',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'DFCE0085E33',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'USPS',
      packages: 'Check',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Texas, USA',
      destination: 'Painesville, OH, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-29',
    package_received_time: '19:35:00',
    in_transit_date: '2025-05-30',
    in_transit_time: '21:00:00',
    out_for_delivery_date: '2025-06-22',
    out_for_delivery_time: '14:00:00',
    on_hold_date: '2025-06-22',
    on_hold_time: '20:15:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-06-24',
    estimated_delivery_time: '23:35:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG003',
    sender: {
      name: 'Natlane',
      address: 'East Hampton, New York (NY), US',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Arthur',
      address: 'Wilshire Blvd. 350, Beverly Hills, CA',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'DFCE0085E34',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'USPS',
      packages: 'Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'East Hampton, NY',
      destination: 'Beverly Hills, CA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-07-10',
    package_received_time: '19:35:00',
    in_transit_date: '2025-07-11',
    in_transit_time: '21:00:00',
    out_for_delivery_date: '2025-07-12',
    out_for_delivery_time: '14:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-07-12',
    estimated_delivery_time: '23:35:00',
    delivery_alert_date: '2025-07-12',
    delivery_alert_time: '23:35:00',
    alert_note: 'Note: good returned to originator no one picked it up',
    time_zone: 'America/Chicago'
  }
];
