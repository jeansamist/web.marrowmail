import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Archive,
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

export default function page() {
  return (
    <div className="h-screen flex flex-col bg-sidebar">
      <div className="h-16 flex pr-3">
        <div className="w-75 h-full flex items-center px-6">
          <h1 className="text-2xl font-bold text-foreground">Marrow Mail</h1>
        </div>
        <div className="flex-1 h-full py-3 flex gap-3 items-center">
          <Button
            size={"icon-lg"}
            variant={"outline"}
            className="h-full aspect-square w-auto! hover:bg-sidebar-accent text-accent-foreground"
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
            className="h-full aspect-square w-auto! hover:bg-sidebar-accent text-accent-foreground"
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
      <div className="flex-1 flex pr-3 min-h-0">
        <div className="w-75 h-full px-3 space-y-3 overflow-auto">
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
        <div className="bg-background flex-1 h-full border-t border-l rounded-t-2xl shadow flex flex-col min-h-0">
          <div className="p-6 h-16 flex items-center justify-between border-b shrink-0">
            <Checkbox />
            <span className="text-muted-foreground text-xs">1-50 of 120</span>
          </div>
          <div className="flex-1 min-h-0 overflow-auto">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className=" border-b p-6 flex items-start gap-3 hover:bg-primary/5 hover:cursor-pointer transition-colors"
              >
                <Checkbox />
                <div className="flex-1 flex flex-col justify-center space-y-1.5">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-foreground">
                        William Messi
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Today, 9:00 AM
                      </div>
                    </div>
                    <div className="text-sm">Meeting for John Doe</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Meeting reminder: Dont forget about our meeting tomorrow at
                    10 AM. Please be prepared with your presentation slides and
                    any necessary documents. Looking forward to seeing you
                    there!
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background flex-1 h-full border-t border-l rounded-t-2xl shadow flex flex-col min-h-0 ml-3">
          <div className="p-3 h-16 flex items-center justify-between border-b shrink-0 gap-3">
            <div className="flex items-center gap-2">
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="hover:bg-sidebar-accent text-accent-foreground"
              >
                <Star />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="hover:bg-sidebar-accent text-accent-foreground"
              >
                <ChevronLeft />
              </Button>
              <Button
                size={"icon-lg"}
                variant={"outline"}
                className="hover:bg-sidebar-accent text-accent-foreground"
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
                  src={"https://avatarapi.runflare.run/public"}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full bg-background"
                />
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Meeting for John Doe
                  </h2>
                  <div className="text-sm text-foreground">William Messi</div>
                  <div className="text-xs text-muted-foreground">
                    william.messi@example.com
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground shrink-0">
                Today, 9:00 AM
              </div>
            </div>
            <div className="text-sm text-foreground leading-relaxed">
              Meeting reminder: Dont forget about our meeting tomorrow at 10 AM.
              Please be prepared with your presentation slides and any necessary
              documents. Looking forward to seeing you there!
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
