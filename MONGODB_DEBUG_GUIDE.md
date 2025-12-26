# MongoDB Connection Troubleshooting Guide

## Why does `querySrv ENOTFOUND` happen?

The error `Error: querySrv ENOTFOUND _mongodb._tcp...` occurs when your Node.js application fails to perform a DNS SRV record lookup for your MongoDB Atlas cluster.

### Common Causes:
1.  **Network/Firewall Restrictions:** Many corporate networks, public Wi-Fi spots (cafes, airports), and some aggressive local firewalls block DNS requests for SRV records or non-standard DNS queries.
2.  **DNS Provider Issues:** Sometimes the ISP's default DNS server fails to resolve these records correctly.
3.  **VPNs:** If you are connected to a VPN, it might interfere with DNS resolution.

When using the "SRV Connection String" (starts with `mongodb+srv://`), the driver attempts to look up the SRV record to discover the list of replica set servers. If this lookup fails, the connection fails.

## Verification Checklist

Use this checklist to verify your connectivity:

### 1. IP Whitelisting on Atlas
*   [ ] Log in to your MongoDB Atlas dashboard.
*   [ ] Go to **Network Access** in the left sidebar.
*   [ ] Check if your current public IP address is listed.
*   [ ] **Test:** Temporarily allow access from anywhere (`0.0.0.0/0`) to rule out IP blocking. *Remember to remove this later for security!*

### 2. Firewall / Network
*   [ ] **Port 27017:** Ensure outbound traffic on port 27017 is allowed.
*   [ ] **DNS:** Try changing your DNS to a public one like Google (8.8.8.8) or Cloudflare (1.1.1.1).
*   [ ] **VPN:** Disconnect from any VPNs and try again.

### 3. Connection String
*   [ ] Ensure you are copying the correct connection string from Atlas.
*   [ ] Verify your username and password are correct (special characters must be URL encoded).

## The Fix: Use Standard Connection String

If the SRV lookup is blocked, you can bypass it by using the **Standard Connection String** (starts with `mongodb://`). This explicitly lists the servers, avoiding the SRV lookup.

See the `connect_mongo_standard.js` file for a code example.
