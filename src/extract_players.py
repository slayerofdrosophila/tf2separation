import json

def convert3to64(x):
	if x[0] != "[":
		return x
	x = x[1:len(x)-1]
	return 76561197960265728 + int(x.split(':')[2])
	
'''
SteamID3 format
[U:1:301587777]
 
SteamID64 format
76561198157178818
'''


# Treat like a graph
# So I have to make graph nodes
# Each player is a nodes
# Each match is an edge


# Dict - Node ID to edge list

# Each player is a dict entry
# This links to a list of logs
# Each log is like a graph edge
# Each log contains a list of player IDs
# These IDs can be used to look up more logs in the dictionary


nodes = {}

# 3119842,3232610


# Set up dict

# For each file
for logid in range(3119842,3132610):
	
	# Open file
	try:
		with open(str(logid), 'r') as f:
			log = json.load(f)
		
		# Extract the players
		players = list(iter(log['players'].keys()))
		players2 = []
		for id3 in players:
			players2.append(convert3to64(id3))
		players = players2
		
		# For each player in the log
		for id64 in players:
			# Add this log to their list
			
			# If player exists in dict:
			try:
				logs_list = nodes[str(id64)]
				# structure is [X,[1,2,3]]
				logs_list.append([logid, players])
				print("HIT")
			# Else, create a dict entry and go from there
			except Exception:
				nodes[str(id64)] = []
				nodes[str(id64)].append([logid, players])
		
	except IOError:
		# print(str(logid) + " Not found")
		pass

# print(nodes.keys())


# let's start by listing every unique player

# 6636 unique players
# print(len(nodes.keys()))

# 781 missing logs

# Now let's organize the connections


dump = json.dumps(nodes)

f = open("stuff.json", "w")
f.write(dump)
f.close()