# CampusNotes Connect

A decentralized Base Mini App for university students to share, search, and contribute campus notes with community-driven recognition.

## Features

- **Targeted Note Upload & Search**: Upload PDF or Markdown notes tagged by course, professor, and topic with robust search functionality
- **Topic Request & Contribution**: Request notes for missing topics and earn recognition for contributions
- **Contributor Recognition & Leaderboards**: Gamified system showcasing top contributors
- **Base Wallet Integration**: Connect with Base wallet for Web3 functionality

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Storage**: IPFS (planned for decentralized file storage)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campusnotes-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/products/onchainkit)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # MiniKit & OnchainKit providers
│   ├── loading.tsx       # Loading UI
│   └── error.tsx         # Error boundary
├── components/            # Reusable UI components
│   ├── AppShell.tsx      # Main app container
│   ├── WalletConnector.tsx # Wallet connection
│   ├── SearchBar.tsx     # Search functionality
│   ├── NoteCard.tsx      # Note display
│   ├── UploadButton.tsx  # File upload
│   ├── RequestButton.tsx # Topic requests
│   └── LeaderboardItem.tsx # Contributor rankings
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Sample data
│   ├── constants.ts      # App configuration
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Design System

The app uses a custom design system with:

- **Colors**: Dark theme with blue primary and green accent
- **Typography**: Inter font with semantic text classes
- **Components**: Modular, reusable UI components
- **Responsive**: Mobile-first design approach

## Future Enhancements

- [ ] IPFS integration for decentralized file storage
- [ ] On-chain reputation system
- [ ] Token rewards for contributors
- [ ] Advanced search filters
- [ ] Note rating and review system
- [ ] University verification system
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
