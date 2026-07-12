"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Archive,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  Forward,
  Inbox,
  Pen,
  Reply,
  Search,
  Settings,
  Sidebar,
  Star,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SIDEBAR_WIDTH = 360;

type Email = {
  sender: string;
  email: string;
  subject: string;
  date: string;
  preview: string;
  body: string;
};

const MOCK_EMAILS: Email[] = [
  {
    sender: "William Messi",
    email: "william.messi@example.com",
    subject: "Meeting for John Doe",
    date: "Today, 9:00 AM",
    preview:
      "Meeting reminder: Dont forget about our meeting tomorrow at 10 AM. Please be prepared with your presentation slides and any necessary documents. Looking forward to seeing you there!",
    body: "Meeting reminder: Dont forget about our meeting tomorrow at 10 AM. Please be prepared with your presentation slides and any necessary documents. Looking forward to seeing you there!",
  },
  {
    sender: "Sarah Connor",
    email: "sarah.connor@example.com",
    subject: "Project Timeline Update",
    date: "Today, 8:15 AM",
    preview:
      "Hi team, I've updated the project timeline based on our last discussion. Please review the attached schedule and let me know if you have any concerns before Friday.",
    body: "Hi team, I've updated the project timeline based on our last discussion. Please review the attached schedule and let me know if you have any concerns before Friday.",
  },
  {
    sender: "Marc Dupont",
    email: "marc.dupont@example.com",
    subject: "Invoice #4021",
    date: "Yesterday, 5:42 PM",
    preview:
      "Please find attached the invoice for last month's services. Payment is due within 30 days. Let us know if you have any questions regarding the charges.",
    body: "Please find attached the invoice for last month's services. Payment is due within 30 days. Let us know if you have any questions regarding the charges.",
  },
  {
    sender: "Emma Laurent",
    email: "emma.laurent@example.com",
    subject: "Welcome to the team!",
    date: "Yesterday, 2:10 PM",
    preview:
      "We're thrilled to have you on board. Your onboarding schedule is attached, and your manager will reach out shortly to plan your first week.",
    body: "We're thrilled to have you on board. Your onboarding schedule is attached, and your manager will reach out shortly to plan your first week.",
  },
  {
    sender: "David Kim",
    email: "david.kim@example.com",
    subject: "Server Maintenance Notice",
    date: "Yesterday, 11:05 AM",
    preview:
      "Scheduled maintenance will occur this weekend from 1 AM to 4 AM. Expect brief downtime on the API and dashboard during this window.",
    body: "Scheduled maintenance will occur this weekend from 1 AM to 4 AM. Expect brief downtime on the API and dashboard during this window.",
  },
  {
    sender: "Julie Bernard",
    email: "julie.bernard@example.com",
    subject: "Design Review Feedback",
    date: "Mon, 4:30 PM",
    preview:
      "Thanks for sharing the new mockups. Overall it looks great — I left a few comments on spacing and color contrast in the shared file.",
    body: "Thanks for sharing the new mockups. Overall it looks great — I left a few comments on spacing and color contrast in the shared file.",
  },
  {
    sender: "Thomas Nguyen",
    email: "thomas.nguyen@example.com",
    subject: "Weekly Newsletter",
    date: "Mon, 9:00 AM",
    preview:
      "This week's highlights: new feature launches, upcoming webinars, and a roundup of customer stories. Read on to catch up on everything.",
    body: "This week's highlights: new feature launches, upcoming webinars, and a roundup of customer stories. Read on to catch up on everything.",
  },
  {
    sender: "Laura Fontaine",
    email: "laura.fontaine@example.com",
    subject: "Contract Renewal",
    date: "Sun, 6:20 PM",
    preview:
      "Your current contract is set to expire next month. Let's schedule a call to discuss renewal terms and any changes you'd like to make.",
    body: "Your current contract is set to expire next month. Let's schedule a call to discuss renewal terms and any changes you'd like to make.",
  },
  {
    sender: "Kevin Roy",
    email: "kevin.roy@example.com",
    subject: "Bug Report: Login Issue",
    date: "Sun, 1:45 PM",
    preview:
      "Several users reported being unable to log in after the latest deploy. I've attached logs and steps to reproduce the issue.",
    body: "Several users reported being unable to log in after the latest deploy. I've attached logs and steps to reproduce the issue.",
  },
  {
    sender: "Alice Moreau",
    email: "alice.moreau@example.com",
    subject: "Happy Birthday!",
    date: "Sat, 10:00 AM",
    preview:
      "Wishing you a fantastic birthday! Hope you get to relax and enjoy the day with the people you love. See you at the office next week!",
    body: "Wishing you a fantastic birthday! Hope you get to relax and enjoy the day with the people you love. See you at the office next week!",
  },
];

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileView, setMobileView] = useState<"list" | "preview">("list");
  const selectedEmail = MOCK_EMAILS[selectedIndex];

  const goToPrevious = () =>
    setSelectedIndex((index) => Math.max(0, index - 1));
  const goToNext = () =>
    setSelectedIndex((index) => Math.min(MOCK_EMAILS.length - 1, index + 1));

  const selectEmail = (index: number) => {
    setSelectedIndex(index);
    setMobileView("preview");
  };

  return (
    <div className="h-screen flex flex-col bg-sidebar">
      <div className="h-16 flex pr-3">
        <div
          className="w-auto md:w-[388px] h-full flex items-center px-4 md:px-6"
          // style={{ width: SIDEBAR_WIDTH }}
        >
          <h1 className="text-2xl font-bold text-foreground whitespace-nowrap">
            Marrow Mail
          </h1>
        </div>
        <div className="flex-1 h-full py-3 flex gap-3 items-center">
          <Button
            size={"icon-lg"}
            variant={"outline"}
            className="h-full aspect-square w-auto! hover:bg-sidebar-accent text-accent-foreground"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <Sidebar />
          </Button>
          <div className="h-full relative flex-1">
            <Input
              placeholder="Search..."
              className="bg-background h-full px-4 pl-12"
            />
            <Search
              className="absolute top-1/2 -translate-y-1/2 left-4 text-muted-foreground"
              size={24}
            />
          </div>
          <Button
            size={"icon-lg"}
            variant={"outline"}
            className="hidden sm:inline-flex h-full aspect-square w-auto! hover:bg-sidebar-accent text-accent-foreground"
          >
            <Bell />
          </Button>
          <Button
            size={"icon-lg"}
            variant={"outline"}
            className="h-full aspect-square w-auto! hover:bg-sidebar-accent text-accent-foreground"
          >
            <Settings />
          </Button>
        </div>
      </div>
      <div className="flex-1 flex px-0 md:px-3 gap-3 min-h-0 relative overflow-hidden">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              key="sidebar-backdrop"
              className="fixed inset-0 z-10 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>
        <motion.div
          initial={false}
          animate={{ width: sidebarOpen ? SIDEBAR_WIDTH : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute md:relative rounded-tr-2xl sm:rounded-tr-none inset-y-0 left-0 z-20 md:z-auto h-full overflow-hidden shrink-0 bg-sidebar"
        >
          <div
            style={{ width: SIDEBAR_WIDTH }}
            className="h-full p-3 sm:p-0  space-y-3 overflow-auto"
          >
            <div className="h-16 bg-background border rounded-2xl p-3 shadow flex items-center gap-3">
              <img
                src={"https://avatarapi.runflare.run/public"}
                alt="Avatar"
                className="h-full aspect-square rounded-full bg-background"
              />
              <div className="flex-1 flex flex-col justify-center">
                <div className="font-semibold text-foreground">John Doe</div>
                <div className="text-sm text-muted-foreground">
                  john.doe@example.com
                </div>
              </div>
            </div>
            <Button className={"w-full justify-between"} size={"lg"}>
              Compose
              <Pen />
            </Button>
            <div className="space-y-1">
              <div className="font-semibold text-muted-foreground px-2">
                Mailboxes
              </div>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-sidebar-accent-foreground"
                }
                variant={"outline"}
                size={"lg"}
              >
                <Inbox />
                Inbox
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-muted-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <ArrowUpRight />
                Sent
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-muted-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <Star />
                Stared
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-muted-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <Archive />
                Archived
              </Button>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-muted-foreground px-2">
                Labels
              </div>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-sidebar-accent-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <span className="w-2 h-2 bg-primary rounded-3xl" />
                Primary
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-sidebar-accent-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <span className="w-2 h-2 bg-red-500 rounded-3xl" />
                Important
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-sidebar-accent-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <span className="w-2 h-2 bg-green-500 rounded-3xl" />
                Work
              </Button>
              <Button
                className={
                  "w-full justify-start hover:bg-sidebar-accent text-sidebar-accent-foreground"
                }
                variant={"ghost"}
                size={"lg"}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-3xl" />
                Personal
              </Button>
            </div>
          </div>
        </motion.div>
        <div
          className={`bg-background flex-1 h-full border rounded-t-2xl shadow flex-col min-h-0 ${
            mobileView === "list" ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="p-6 h-16 flex items-center justify-between border-b shrink-0">
            <Checkbox />
            <span className="text-muted-foreground text-xs">
              1-{MOCK_EMAILS.length} of {MOCK_EMAILS.length}
            </span>
          </div>
          <div className="flex-1 min-h-0 overflow-auto">
            {MOCK_EMAILS.map((mail, index) => (
              <div
                key={mail.email + index}
                onClick={() => selectEmail(index)}
                className={`border-b p-6 flex items-start gap-3 hover:bg-accent/50 hover:cursor-pointer transition-colors ${
                  index === selectedIndex ? "bg-primary/5" : ""
                }`}
              >
                <div className="relative group/avatar h-10 w-10 shrink-0">
                  <img
                    src={`https://avatarapi.runflare.run/public?usearname=${encodeURIComponent(
                      mail.sender.split(" ")[0],
                    )}`}
                    alt={mail.sender}
                    className="h-10 w-10 rounded-full bg-background"
                  />
                  <div className="absolute inset-0 rounded-full bg-background opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                    <Checkbox onClick={(event) => event.stopPropagation()} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-1.5">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-foreground">
                        {mail.sender}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {mail.date}
                      </div>
                    </div>
                    <div className="text-sm text-foreground">
                      {mail.subject}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {mail.preview}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-background flex-1 h-full border rounded-t-2xl shadow flex-col min-h-0 ${
            mobileView === "preview" ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="p-3 h-16 flex items-center justify-between border-b shrink-0 gap-3">
            <div className="flex items-center gap-2">
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="text-accent-foreground md:hidden"
                onClick={() => setMobileView("list")}
              >
                <ArrowLeft />
              </Button>
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="text-accent-foreground"
              >
                <Star />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="text-accent-foreground"
                disabled={selectedIndex === 0}
                onClick={goToPrevious}
              >
                <ChevronLeft />
              </Button>
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="text-accent-foreground"
                disabled={selectedIndex === MOCK_EMAILS.length - 1}
                onClick={goToNext}
              >
                <ChevronRight />
              </Button>
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="hover:bg-destructive/10 text-destructive"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-auto p-6 space-y-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img
                  src={`https://avatarapi.runflare.run/public?usearname=${encodeURIComponent(
                    selectedEmail.sender.split(" ")[0],
                  )}`}
                  alt={selectedEmail.sender}
                  className="h-10 w-10 rounded-full bg-background"
                />
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {selectedEmail.subject}
                  </h2>
                  <div className="text-sm text-foreground">
                    {selectedEmail.sender}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {selectedEmail.email}
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground shrink-0">
                {selectedEmail.date}
              </div>
            </div>
            <div className="text-sm text-foreground leading-relaxed">
              {selectedEmail.body}
            </div>{" "}
            <div className="flex items-center gap-2">
              <Button
                variant={"outline"}
                size={"lg"}
                className="hover:bg-sidebar-accent text-accent-foreground"
              >
                <Reply />
                Reply
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="hover:bg-sidebar-accent text-accent-foreground"
              >
                <Forward />
                Forward
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
