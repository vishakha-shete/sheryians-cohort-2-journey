# 🌐 Day 01 — How the Internet Really Works

> **Before becoming a good developer, understand the world your code runs in.**

Today was **Day 01 of my Cohort 2.0 learning journey**.

The first technical topic was:

# **How Does the Internet Really Work?**

The session started with theory, and the goal was to understand what actually happens when we type a website address, search for something, or send a message over the internet.

Instead of memorizing definitions, I wanted to understand the complete journey of data:

```text
Device
   ↓
Packets
   ↓
Network / Tower
   ↓
ISP
   ↓
DNS
   ↓
IP Address
   ↓
Routing
   ↓
Destination Server
   ↓
Response
   ↓
Back to Device
```

---

# 🧠 Before We Start

The session began with a reminder to stay present.

Maybe:

* Something bad happened during the day.
* The day wasn't going well.
* You are tired.
* You are distracted.
* Or maybe you're extremely excited.

Whatever happened before the class, the important thing is:

> **From today, let's try to do things better.**

This is Day 01.

A fresh start.

A chance to learn something new and understand technology at a deeper level.

---

# 🌍 What Exactly Is the Internet?

The **Internet** is a global network of interconnected computer networks and devices that communicate using standardized protocols.

It allows devices around the world to exchange data.

For example:

* Your phone can communicate with a server in another city.
* Your browser can request a webpage.
* You can send a message to someone in another country.
* You can stream a video hosted on a remote server.

All of this happens through a combination of:

* Networks
* Routers
* ISPs
* DNS
* IP addresses
* Communication protocols
* Physical infrastructure
* Data centers
* Fiber-optic cables
* Wireless networks

---

# 📦 What Are Packets?

One of the first important concepts was:

# **Packets**

When data travels across a network, it is generally broken into smaller units called **packets**.

Imagine sending a large book from one location to another.

Instead of sending the entire book as one giant object, it can be divided into smaller packages.

Similarly, network data is divided into smaller pieces so that it can travel through the network efficiently.

```text
Large Data
     ↓
 ┌────┬────┬────┬────┐
 │ P1 │ P2 │ P3 │ P4 │
 └────┴────┴────┴────┘
     ↓
 Network
```

The packets can travel through different network components before reaching their destination.

---

# 📱 Example — Sending "Hey"

Suppose **Harsh** is in Bhopal and wants to send:

> "Hey"

to **Joseffe** in San Francisco.

A simplified journey looks like:

```text
Harsh's Phone
     ↓
Network Connection
     ↓
Packets
     ↓
ISP / Network
     ↓
Routers
     ↓
Internet Backbone
     ↓
Destination Network
     ↓
Joseffe's Device
```

The actual path can be much more complicated, but this gives us the basic mental model.

---

# 📡 Does Data Travel Through the Air?

When using mobile data or Wi-Fi, your device communicates wirelessly with nearby network equipment.

For example:

```text
Phone
  ↓
Radio/Wireless Signal
  ↓
Cell Tower / Wi-Fi Access Point
  ↓
Network
```

You cannot see the data itself.

You can see the physical equipment and cables, but the actual bits of information being transmitted are not visible to our eyes.

---

# 📶 From Your Phone to the Network

When using mobile data, your phone communicates with a nearby cellular network.

A simplified path is:

```text
📱 Phone
   ↓
📡 Cellular Network
   ↓
🏢 ISP / Mobile Network
   ↓
🌐 Internet
```

Examples of ISPs/mobile network operators include:

* Jio
* Airtel
* Vi
* BSNL

The ISP provides connectivity between your device and the wider internet.

---

# 🏢 What Is an ISP?

## ISP = Internet Service Provider

An **Internet Service Provider** provides internet connectivity to users.

Examples include:

* Jio
* Airtel
* Vi
* BSNL

The ISP connects your local network to larger networks that make up the Internet.

---

# 🔀 Routing

Once data enters the network, it needs to be forwarded toward its destination.

This process is called:

# **Routing**

Routing means determining where packets should be forwarded next so they can eventually reach their destination.

A simplified view:

```text
Source
  ↓
Router
  ↓
Router
  ↓
Router
  ↓
Destination
```

There isn't necessarily one fixed physical path for every packet.

Networks use routing protocols and routing tables to determine suitable paths.

---

# 🗺️ Local vs Global Data

If the destination is nearby or within the same network/region, the data may travel through local or regional infrastructure.

If the destination is somewhere else in the world, the traffic may pass through:

* Multiple ISPs
* Routers
* Internet exchange points
* Long-distance fiber networks
* Undersea cables
* Data centers
* Other network infrastructure

---

# 🌊 How Does Data Travel Between Countries?

This was one of the most interesting parts of the session.

Suppose:

```text
India 🇮🇳
    ↓
    ↓
    ↓
USA 🇺🇸
```

How can data travel between two countries?

One major part of the answer is:

# 🌊 Undersea Fiber-Optic Cables

Huge fiber-optic cables run across the oceans and connect different parts of the world.

These cables carry enormous amounts of internet traffic.

A simplified journey:

```text
India
  ↓
Landing Station
  ↓
🌊 Undersea Fiber-Optic Cable
  ↓
International Network
  ↓
USA
  ↓
Destination Network
  ↓
Server
```

---

# 💡 Why Fiber Optics?

Fiber-optic cables transmit data using **light through optical fibers**.

They can carry huge amounts of information over long distances at very high speeds.

This is one of the major foundations of global internet connectivity.

---

# 🛰️ What About Satellites?

Another way of communicating over long distances is through satellites.

However, for much of the world's internet traffic, **terrestrial and undersea fiber-optic networks are extremely important**.

A simplified comparison:

```text
Internet Traffic
      │
      ├── Fiber-Optic Networks
      │
      └── Satellite Links
```

Fiber is widely used for high-capacity backbone connectivity, while satellites are especially useful for situations such as remote connectivity and certain specialized communication needs.

---

# 🔤 Domain Names

Now comes an important question:

When we type:

```text
google.com
```

what actually happens?

Does the network physically route packets using the words:

```text
google.com
```

Not exactly.

Computers communicate using numerical network addresses, such as **IP addresses**.

Humans prefer easy-to-remember names.

That's why domain names exist.

---

# 🌐 What Is a Domain Name?

A **domain name** is a human-readable name used to identify an internet resource.

Examples:

```text
google.com
github.com
youtube.com
```

It is much easier for humans to remember:

```text
google.com
```

than a numerical IP address.

---

# 📍 What Is an IP Address?

## IP = Internet Protocol

An **IP address** identifies a network interface/device or service endpoint within an IP network.

Examples of IPv4 addresses look like:

```text
142.250.183.14
```

An IPv4 address consists of four numerical parts separated by dots.

There is also **IPv6**, which uses a much larger address space.

Example:

```text
2001:db8::1
```

---

# 📖 Domain Name vs IP Address

Think of it like this:

```text
Human-friendly name
        ↓
    google.com
        ↓
       DNS
        ↓
   IP Address
        ↓
Network destination
```

The domain name provides a convenient way for humans to refer to internet resources.

DNS helps translate domain names into the information needed to locate those resources.

---

# 🔎 What Is DNS?

## DNS = Domain Name System

DNS is the system that translates domain names into IP addresses and other DNS records.

For example:

```text
google.com
     ↓
    DNS
     ↓
IP Address
```

This is similar to using a contact name instead of remembering someone's phone number.

Instead of remembering:

```text
some-long-number
```

we remember:

```text
google.com
```

---

# 📞 A Simple DNS Analogy

Imagine your phone contacts.

You save:

```text
Harsh
```

instead of remembering Harsh's phone number every time.

Similarly, on the internet:

```text
google.com
```

is easier for humans to remember than an IP address.

DNS helps resolve that name to relevant network information.

---

# 🧩 Does Every Device Always Have an IP Address?

A device communicating on an IP network needs an IP address for that network connection.

But the important distinction is:

**A device can have different types of addresses and can have different IP addresses over time.**

For example, when your phone connects to a mobile network, the network can assign it an IP address.

When you disconnect or reconnect, that address may change.

---

# 🏠 Private IP vs Public IP

There are also different contexts for IP addresses.

A device inside your home network may have a **private IP address** such as:

```text
192.168.1.10
```

Your router/network may communicate with the broader internet using a **public IP address**.

So the simplified picture is:

```text
Your Phone
Private IP
    ↓
Home Router / Mobile Network
    ↓
Public Internet
```

---

# 📡 DHCP

Another important networking concept is:

# DHCP — Dynamic Host Configuration Protocol

DHCP can automatically provide devices with network configuration, including an IP address.

For example:

```text
Device joins network
        ↓
DHCP request
        ↓
DHCP server
        ↓
IP configuration
        ↓
Device can communicate
```

This is why users generally don't need to manually type an IP address every time they connect to a network.

---

# 🆔 What Is a MAC Address?

Another concept introduced in the session was:

# MAC Address

MAC stands for:

**Media Access Control**

A MAC address is associated with a network interface and is used at the **data-link layer** for local network communication.

A simplified model:

```text
Local Network
     ↓
MAC Address
```

Whereas:

```text
IP Network
     ↓
IP Address
```

MAC addresses and IP addresses serve different purposes.

### Simple distinction:

| Concept     | Purpose                            |
| ----------- | ---------------------------------- |
| Domain Name | Human-friendly name                |
| IP Address  | Network-layer addressing           |
| MAC Address | Local network interface addressing |
| DNS         | Resolves domain names              |
| DHCP        | Provides network configuration     |
| ISP         | Provides internet connectivity     |
| Routing     | Determines packet forwarding paths |

---

# 🧭 Domain Name, IP & MAC

A useful mental model:

```text
google.com
    ↓
   DNS
    ↓
IP Address
    ↓
Routing
    ↓
Network Interface
    ↓
MAC Address
```

This is a simplified conceptual model, but it helps understand the roles of each component.

---

# 🔄 Complete Internet Journey

Now let's combine everything.

Suppose I type:

```text
google.com
```

into my browser.

A simplified journey is:

### Step 1 — User enters the domain

```text
google.com
```

### Step 2 — Browser/OS needs network information

The system checks available DNS information/cache and may perform a DNS lookup.

### Step 3 — DNS resolution

```text
google.com
     ↓
DNS
     ↓
IP Address
```

### Step 4 — Data is packaged

The application data is transported through networking protocols and ultimately carried inside packets.

### Step 5 — Packets leave the device

The device sends the traffic through:

```text
Wi-Fi / Cellular / Ethernet
```

### Step 6 — ISP/network

The traffic moves through the local network and ISP.

### Step 7 — Routing

Routers forward packets toward the destination.

### Step 8 — Long-distance connectivity

If required, traffic may travel across:

```text
Fiber-optic networks
Undersea cables
International backbone networks
```

### Step 9 — Destination network

The packets reach the network hosting the destination service.

### Step 10 — Server processes the request

The server receives and processes the request.

### Step 11 — Response travels back

The response travels through the network back toward your device.

### Step 12 — Browser displays the result

Your browser receives the response and renders the webpage.

---

# 🔁 Complete Flow

```text
              USER
               │
               ▼
        ┌──────────────┐
        │    Browser   │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │     DNS      │
        └──────┬───────┘
               │
          IP Address
               │
               ▼
        ┌──────────────┐
        │ Local Network│
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │     ISP      │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │   Routers    │
        └──────┬───────┘
               │
        ┌──────▼───────┐
        │ Fiber / ISP  │
        │   Networks   │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │   Server     │
        └──────┬───────┘
               │
          Response
               │
               ▼
          Your Device
```

---

# 🌐 How Computers Communicate With Each Other

The simplified model from today's session:

```text
Computer
   ↓
Data
   ↓
Packets
   ↓
Network
   ↓
ISP
   ↓
DNS / IP
   ↓
Routing
   ↓
Destination Computer / Server
```

---

# 🌍 How Data Travels Around the World

A simplified international journey:

```text
Your Device
     ↓
Packets
     ↓
Local Network
     ↓
ISP
     ↓
Routers
     ↓
International Network
     ↓
Undersea Fiber-Optic Cable
     ↓
Foreign Network
     ↓
Destination ISP / Network
     ↓
Server
```

---

# 🕸️ History of the Web

The session also introduced the evolution of the Web.

There are commonly discussed three stages:

```text
Web 1.0
   ↓
Web 2.0
   ↓
Web 3.0
```

---

# 1️⃣ Web 1.0 — Read

Web 1.0 is commonly described as the early web where websites were largely static and users primarily consumed information.

The user mostly:

> **Read**

Example:

```text
Website
   ↓
User
   ↓
Reads information
```

There was comparatively little user-generated content or interaction.

---

# 2️⃣ Web 2.0 — Read + Write

The modern web is commonly associated with **Web 2.0**.

Users can:

* Read content.
* Write content.
* Upload photos.
* Upload videos.
* Comment.
* Like.
* Share.
* Create accounts.
* Interact with other users.

Examples include:

* YouTube
* Instagram
* Facebook
* GitHub
* Reddit

The web became much more interactive.

### Web 2.0:

```text
Read + Write + Interact
```

---

# 3️⃣ Web 3.0 — Decentralized / Ownership-Oriented Web

Web3 is often described as a vision of a more decentralized internet where users can have greater control or ownership of digital assets and identity.

Technologies commonly associated with Web3 include:

* Blockchain
* Cryptocurrencies
* Smart contracts
* Decentralized applications
* Digital wallets

The idea discussed in the session was:

> **Greater user ownership and control of data/assets.**

However, Web3 is still an evolving ecosystem, and different people use the term to mean different things.

---

# 🧠 Important Concepts Learned

## 📦 Packets

Small units of data transmitted across a network.

## 🌐 Internet

A global network of interconnected networks.

## 🏢 ISP

Internet Service Provider.

Provides connectivity between users and larger networks.

## 🔎 DNS

Domain Name System.

Helps resolve human-readable domain names into IP-related information.

## 📍 IP Address

A network-layer address used to identify a network interface or endpoint.

## 🆔 MAC Address

An address associated with a network interface and used for local network communication.

## 🧭 Routing

The process of forwarding packets toward their destination.

## 📡 DHCP

Dynamic Host Configuration Protocol.

Helps automatically provide network configuration to devices.

## 🌊 Undersea Cables

Fiber-optic cables that carry huge amounts of international internet traffic across oceans.

## 🌐 Domain Name

Human-readable name such as:

```text
google.com
```

---

# 📝 My Key Takeaways

### 1. The Internet Is Not Magic

When I click a button or open a website, a huge amount of networking infrastructure is working behind the scenes.

### 2. Data Travels as Packets

Data is broken into smaller pieces and transmitted across networks.

### 3. Domains Are Human-Friendly

Humans use:

```text
google.com
```

while networking systems use IP addresses and other network information.

### 4. DNS Is Extremely Important

DNS helps translate human-readable domain names into information used to reach internet services.

### 5. ISPs Connect Us to the Internet

Our ISP provides connectivity between our device/network and the broader internet.

### 6. Routers Forward Traffic

Routers help move packets toward their destination.

### 7. The Internet Is Physical

The internet isn't just software.

It depends on physical infrastructure:

* Fiber-optic cables
* Undersea cables
* Routers
* Switches
* Cell towers
* Data centers
* Servers
* Network equipment

### 8. Software Engineers Should Understand the Foundation

As a future software engineer, understanding what happens underneath the applications I build will help me reason about:

* APIs
* HTTP
* Servers
* Databases
* Authentication
* Networking
* Deployment
* Cloud infrastructure
* Performance
* Security

---

# 🔄 What I Learned Today

```text
Internet
   ↓
Packets
   ↓
Networks
   ↓
ISP
   ↓
DNS
   ↓
IP Address
   ↓
Routing
   ↓
Fiber / Internet Backbone
   ↓
Server
   ↓
Response
   ↓
User
```

---

# 💭 My Reflection

Today's class reminded me that before learning frameworks and writing complicated applications, I should understand the fundamentals underneath them.

When I write:

```javascript
fetch("https://example.com")
```

it looks extremely simple.

But behind that single line, there is an entire world of:

* DNS resolution
* Network connections
* Packets
* Routing
* Servers
* Protocols
* Physical infrastructure

That makes the internet much more interesting.

I don't want to be a developer who only knows how to use tools.

I want to understand **what happens underneath the tools I use.**

---

# 🚀 Day 01 Status

* [x] Attended the session
* [x] Learned how the internet works
* [x] Learned about packets
* [x] Learned about ISPs
* [x] Learned about DNS
* [x] Learned about IP addresses
* [x] Learned about MAC addresses
* [x] Learned about DHCP
* [x] Learned about routing
* [x] Learned about fiber-optic cables
* [x] Learned about undersea cables
* [x] Learned about Web 1.0
* [x] Learned about Web 2.0
* [x] Learned about Web 3.0
* [x] Documented my learning
* [ ] Practice / revise the concepts
* [ ] Explain the complete flow without notes

---

# 🎯 Day 01 Challenge

Before moving to the next topic, I want to be able to explain this without looking at my notes:

> **"What happens when I type google.com in my browser and press Enter?"**

If I can explain the journey clearly in my own words, then I know I didn't just watch the lecture — **I understood it.**

---

# 🔥 Learning Principle

> **Don't just watch the lecture. Understand it.**
>
> **Don't just understand it. Explain it.**
>
> **Don't just explain it. Apply it.**

---

# 🌱 Day 01 — Completed

**Topic:** How the Internet Really Works 🌐

**Cohort:** Sheryians Coding School — Cohort 2.0

**Day:** 01

**Status:** ✅ Completed

> **One day. One concept. One step closer to becoming a software engineer. 🚀**

---

### 📚 Next Step

Continue the cohort → Learn → Practice → Build → Push to GitHub → Document → Repeat.

**#Cohort2.0 #Day01 #Internet #Networking #WebDevelopment #SoftwareEngineering #LearningInPublic #100DaysOfCode #BuildInPublic**
