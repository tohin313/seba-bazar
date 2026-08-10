CREATE TABLE IF NOT EXISTS service_requests (
  id BIGSERIAL PRIMARY KEY,
  request_id VARCHAR(60) UNIQUE NOT NULL,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  location VARCHAR(180) NOT NULL,
  service VARCHAR(120) NOT NULL,
  details TEXT NOT NULL,
  preferred_time VARCHAR(60),
  contact_method VARCHAR(30),
  status VARCHAR(30) NOT NULL DEFAULT 'New',
  fee NUMERIC(10,2),
  admin_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS service_requests_status_idx ON service_requests(status);
CREATE INDEX IF NOT EXISTS service_requests_phone_idx ON service_requests(phone);