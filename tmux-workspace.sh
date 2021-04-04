# !/bin/sh

tmux new -s cubetables -d

# working window
tmux send-keys 'vim' C-m

# client dev window
tmux split-window -v -t cubetables
tmux resize-pane -D 10
tmux send-keys 'cd client && yarn dev' C-m 'n' C-m

# server dev window
tmux split-window -h -t cubetables
tmux send-keys 'cd server && yarn dev' C-m

# git/misc window
tmux new-window -t cubetables

tmux select-window -t cubetables:0
tmux select-pane -t 0
tmux a -t cubetables
