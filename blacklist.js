var blacklist = ['department of homeland security (dhs)', 'federal emergency management agency (fema)', 'coast guard (uscg)', 'customs and border protection (cbp)', 'border patrol', 'secret service (usss)', 'national operations center (noc)', 'homeland defense', 'immigration customs enforcement (ice)', 'agent', 'task force', 'central intelligence agency (cia)', 'fusion center', 'drug enforcement agency (dea)', 'secure border initiative (sbi)', 'federal bureau of investigation (fbi)', 'alcohol tobacco and firearms (atf)', 'u.s. citizenship and immigration services (cis)', 'federal air marshal service (fams)', 'transportation security administration (tsa)', 'air marshal', 'federal aviation administration (faa)', 'national guard', 'red cross', 'united nations (un)', 'domestic security', 'assassination', 'domestic security', 'drill', 'exercise', 'cops', 'law enforcement', 'authorities', 'disaster assistance', 'disaster management', 'dndo (domestic nuclear detection office)', 'national preparedness', 'mitigation', 'prevention', 'response', 'recovery', 'dirty bomb', 'domestic nuclear detection', 'emergency management', 'emergency response', 'first responder', 'homeland security', 'maritime domain awareness (mda)', 'national preparedness initiative', 'militia', 'shooting', 'shots fired', 'evacuation', 'deaths', 'hostage', 'explosion (explosive)', 'disaster medical assistance team (dmat)', 'organized crime', 'gangs', 'national security', 'state of emergency', 'security', 'breach', 'threat', 'standoff', 'swat', 'screening', 'lockdown', 'bomb (squad or threat)', 'crash', 'looting', 'riot', 'emergency landing', 'pipe bomb', 'incident', 'facility', 'hazmat & nuclear', 'hazmat', 'chemical spill', 'suspicious package/device', 'toxic', 'national laboratory', 'nuclear facility', 'nuclear threat', 'cloud', 'plume', 'radiation', 'radioactive', 'leak', 'biological infection (or event)', 'chemical', 'chemical burn', 'biological', 'epidemic', 'hazardous', 'hazardous material incident', 'industrial spill', 'infection', 'powder (white)', 'gas', 'spillover', 'anthrax', 'blister agent', 'exposure', 'burn', 'nerve agent', 'ricin', 'sarin', 'north korea', 'health concern + h1n1', 'outbreak', 'contamination', 'exposure', 'virus', 'evacuation', 'bacteria', 'recall', 'ebola', 'food poisoning', 'foot and mouth (fmd)', 'h5n1', 'avian', 'flu', 'salmonella', 'small pox', 'plague', 'human to human', 'human to animal', 'influenza', 'center for disease control (cdc)', 'drug administration (fda)', 'public health', 'toxic', 'agro terror', 'tuberculosis (tb)', 'agriculture', 'listeria', 'symptoms', 'mutation', 'resistant', 'antiviral', 'wave', 'pandemic', 'infection', 'water/air borne', 'sick', 'swine', 'pork', 'strain', 'quarantine', 'h1n1', 'vaccine', 'tamiflu', 'norvo virus', 'epidemic', 'world health organization (who and components)', 'viral hemorrhagic fever', 'e. coli', 'infrastructure security', 'infrastructure security', 'airport', 'cikr (critical infrastructure & key resources)', 'amtrak', 'collapse', 'computer infrastructure', 'communications infrastructure', 'telecommunications', 'critical infrastructure', 'national infrastructure', 'metro', 'wmata', 'airplane (and derivatives)', 'chemical fire', 'subway', 'bart', 'marta', 'port authority', 'nbic (national biosurveillance integration center)', 'transportation security', 'grid', 'smart', 'body scanner', 'electric', 'failure or outage', 'black out', 'brown out', 'port', 'dock', 'bridge', 'canceled', 'delays', 'service disruption', 'power lines', 'southwest border violence', 'drug cartel', 'violence', 'gang', 'drug', 'narcotics', 'cocaine', 'marijuana', 'heroin', 'border', 'mexico', 'cartel', 'southwest', 'juarez', 'sinaloa', 'tijuana', 'torreon', 'yuma', 'tucson', 'decapitated', 'u.s. consulate', 'consular', 'el paso', 'fort hancock', 'san diego', 'ciudad juarez', 'nogales', 'sonora', 'colombia', 'mara salvatrucha', 'ms13 or ms-13', 'drug war', 'mexican army', 'methamphetamine', 'cartel de golfo', 'gulf cartel', 'la familia', 'reynose', 'nuevo leon', 'narcos', 'narco banners (spanish equivalents)', 'los zetas', 'shootout', 'execution', 'gunfight', 'trafficking', 'kidnap', 'calderon', 'reyosa', 'bust', 'tamaulipas', 'meth lab', 'drug trade', 'illegal immigrants', 'smuggling (smugglers)', 'matamoros', 'michoacana', 'guzman', 'arellano-felix', 'beltran-leyva', 'barrio azteca', 'artistics assassins', 'mexicles', 'new federation', 'terrorism', 'terrorism', 'al queda (all spellings)', 'terror', 'iraq', 'afghanistan', 'iran', 'pakistan', 'agro', 'environmental terrorist', 'eco terrorism', 'conventional weapon', 'target', 'weapons grade', 'dirty bomb', 'enriched', 'chemical weapon', 'biological weapon', 'ammonium nitrate', 'improvised explosive device', 'ied (improvised explosive device)', 'abu sayyaf', 'hamas', 'farc (armed revolutionary forces colombia)', 'ira (irish republican army)', 'eta (euskadi ta askatasuna)', 'basque separatists', 'hezbollah', 'tamil tiger', 'plf (palestine liberation front)', 'plo (palestine libration organization)', 'car bomb', 'jihad', 'taliban', 'weapons cache', 'suicide bomber', 'suicide attack', 'suspicious substance', 'aqap (al qaeda arabian peninsula)', 'aqim (al qaeda in the islamic maghreb)', 'ttp (tehrik-i-taliban pakistan)', 'yemen', 'pirates', 'extremism', 'somalia', 'nigeria', 'radicals', 'al-shabaab', 'home grown', 'plot', 'nationalist', 'recruitment', 'fundamentalism', 'islamist', 'weather/disaster/emergency', 'emergency', 'hurricane', 'tornado', 'twister', 'tsunami', 'earthquake', 'tremor', 'flood', 'storm', 'crest', 'temblor', 'extreme weather', 'forest fire', 'brush fire', 'ice', 'stranded/stuck', 'hail', 'wildfire', 'tsunami warning center', 'magnitude', 'avalanche', 'typhoon', 'shelter-in-place', 'disaster', 'snow', 'blizzard', 'sleet', 'mud slide or mudslide', 'erosion', 'power outage', 'brown out', 'warning', 'watch', 'lightening', 'relief', 'closure', 'interstate', 'burst', 'emergency broadcast system', 'cyber security', 'cyber security', 'botnet', 'ddos (dedicated denial of service)', 'denial of service', 'malware', 'virus', 'trojan', 'keylogger', 'cyber command', '2600', 'spammer', 'phishing', 'rootkit', 'phreaking', 'cain and abel', 'brute forcing', 'mysql injection', 'cyber attack', 'cyber terror', 'hacker', 'china', 'conficker', 'worm', 'scammers', 'social media', 'waihopai', 'infosec', 'information security', 'information warfare', 'iw', 'priavacy', 'information terrorism', 'terrorism defensive information', 'defense information warfare', 'offensive information', 'offensive information warfare', 'national information infrastructure', 'infosec', 'reno', 'compsec', 'computer terrorism', 'firewalls', 'secure internet connections', 'iss', 'passwords', 'defcon v', 'hackers', 'encryption', 'espionage', 'usdoj', 'nsa', 'cia', 's/key', 'ssl', 'fbi', 'secert service', 'usss', 'defcon', 'white house', 'undercover', 'nccs', 'mayfly', 'pgp', 'pem', 'rsa', 'perl-rsa', 'msnbc', 'bet', 'aol', 'aol tos', 'cis', 'cbot', 'aimsx', 'starlan', '3b2', 'bitnet', 'cosmos', 'datta', 'e911', 'fcic', 'htcia', 'iacis', 'ut/rus', 'janet', 'jicc', 'remob', 'leetac', 'utu', 'vnet', 'brlo', 'bz', 'canslo', 'cbnrc', 'cida', 'java', 'active x', 'compsec 97', 'llc', 'dera', 'mavricks', '****-hackers', '^?', 'steve case', 'tools', 'telex', 'military intelligence', 'scully', 'flame', 'infowar', 'bubba', 'freeh', 'archives', 'sundevil', 'jack', 'investigation', 'isaca', 'ncsa', 'spook words', 'verisign', 'secure', 'asio', 'lebed', 'ice', 'nro', 'lexis-nexis', 'nsct', 'scif', 'flir', 'lacrosse', 'flashbangs', 'hrt', 'dia', 'uscoi', 'cid', 'bop', 'fincen', 'fletc', 'nij', 'acc', 'afspc', 'bmdo', 'navwan', 'nrl', 'rl', 'navwcwpns', 'nswc', 'usafa', 'ahpcrc', 'arpa', 'lablink', 'usacil', 'uscg', 'nrc', '~', 'cdc', 'doe', 'fms', 'hpcc', 'ntis', 'sel', 'uscode', 'cise', 'sirc', 'cim', 'isn', 'djc', 'sgc', 'uncpcj', 'cfc', 'dreo', 'cda', 'dra', 'shape', 'saclant', 'becca', 'dcjftf', 'halo', 'haho', 'fks', '868', 'gchq', 'ditsa', 'amemb', 'nsg', 'hic', 'edi', 'sas', 'sbs', 'udt', 'goe', 'doe', 'geo', 'masuda', 'forte', 'gign', 'exon shell', 'cqb', 'conus', 'ctu', 'rcmp', 'gru', 'sasr', 'gsg-9', '22nd sas', 'geos', 'eada', 'bbe', 'echelon', 'dictionary', 'md2', 'md4', 'mda', 'myk', '747', '777', '767', 'mi5', '737', 'mi6', '757', 'kh-11', 'shayet-13', 'sadms', 'spetznaz', 'recce', '707', 'cio', 'nocs', 'halcon', 'duress', 'raid', 'psyops', 'grom', 'd-11', 'sert', 'vip', 'arc', 's.e.t. team', 'mp5k', 'drec', 'devgrp', 'df', 'dsd', 'fdm', 'gru', 'lrts', 'sigdev', 'nacsi', 'psac', 'ptt', 'rfi', 'sigdasys', 'tdm. suklo', 'suslo', 'telint', 'texta. elf', 'lf', 'mf', 'vhf', 'uhf', 'shf', 'sasp', 'wank', 'colonel', 'domestic disruption', 'smuggle', '15kg', 'nitrate', 'pretoria', 'm-14', 'enigma', 'bletchley park', 'clandestine', 'nkvd', 'argus', 'afsatcom', 'cqb', 'nvd', 'counter terrorism security', 'rapid reaction', 'corporate security', 'sniper', 'pps', 'asis', 'aslet', 'tscm', 'security consulting', 'high security', 'security evaluation', 'electronic surveillance', 'mi-17', 'counterterrorism', 'spies', 'eavesdropping', 'debugging', 'interception', 'cocot', 'rhost', 'rhosts', 'seta', 'amherst', 'broadside', 'capricorn', 'gamma', 'gorizont', 'guppy', 'ionosphere', 'mole', 'keyhole', 'kilderkin', 'artichoke', 'badger', 'cornflower', 'daisy', 'egret', 'iris', 'hollyhock', 'jasmine', 'juile', 'vinnell', 'b.d.m.', 'sphinx', 'stephanie', 'reflection', 'spoke', 'talent', 'trump', 'fx', 'fxr', 'imf', 'pocsag', 'covert video', 'intiso', 'r00t', 'lock picking', 'beyond hope', 'csystems', 'passwd', '2600 magazine', 'competitor', 'eo', 'chan', 'alouette', 'executive', 'event security', 'mace', 'cap-stun', 'stakeout', 'ninja', 'asis', 'isa', 'eod', 'oscor', 'merlin', 'ntt', 'sl-1', 'rolm', 'tie', 'tie-fighter', 'pbx', 'sli', 'ntt', 'mscj', 'mit', '69', 'rit', 'msee', 'cable & wireless', 'cse', 'embassy', 'eta', 'porno', 'fax', 'finks', 'fax encryption', 'white noise', 'pink noise', 'cra', 'm.p.r.i.', 'top secret', 'mossberg', '50bmg', 'macintosh security', 'macintosh internet security', 'macintosh firewalls', 'unix security', 'vip protection', 'sig', 'sweep', 'medco', 'trd', 'tdr', 'sweeping', 'telint', 'audiotel', 'harvard', '1080h', 'sws', 'asset', 'satellite imagery', 'cypherpunks', 'coderpunks', 'trw', 'remailers', 'replay', 'redheads', 'rx-7', 'explicit', 'flame', 'pornstars', 'avn', 'playboy', 'anonymous', 'sex', 'chaining', 'codes', '20', 'subversives', 'slip', 'toad', 'data havens', 'unix', 'elvis', 'quiche', 'des', '1*', 'natia', 'natoa', 'sneakers', 'counterintelligence', 'industrial espionage', 'pi', 'tsci', 'industrial intelligence', 'h.n.p.', 'juiliett class submarine', 'locks', 'loch', 'ingram mac-10', 'sigvoice', 'ssa', 'e.o.d.', 'semtex', 'penrep', 'racal', 'otp', 'oss', 'blowpipe', 'ccs', 'gsa', 'kilo class', 'squib', 'primacord', 'rsp', 'becker', 'nerd', 'fangs', 'austin', 'comirex', 'gpmg', 'speakeasy', 'humint', 'geodss', 'soro', 'm5', 'anc', 'zone', 'sbi', 'dss', 's.a.i.c.', 'minox', 'keyhole', 'sar', 'rand corporation', 'wackenhutt', 'eo', 'wackendude', 'mol', 'hillal', 'ggl', 'ctu', 'botux', 'virii', 'ccc', 'blacklisted 411', 'internet underground', 'xs4all', 'retinal fetish', 'fetish', 'yobie', 'ctp', 'cato', 'phon-e', 'chicago posse', 'l0ck', 'spook keywords', 'pla', 'tdyc', 'w3', 'cud', 'cdc', 'weekly world news', 'zen', 'world domination', 'gru', 'm72750', 'salsa', '7', 'blowfish', 'gorelick', 'glock', 'ft. meade', 'press-release', 'indigo', 'wire transfer', 'e-cash', 'bubba the love sponge', 'digicash', 'zip', 'swat', 'ortega', 'ppp', 'crypto-anarchy', 'at&t', 'sgi', 'mci', 'blacknet', 'middleman', 'klm', 'blackbird', 'plutonium', 'texas', 'jihad', 'sdi', 'uzi', 'fort meade', 'supercomputer', 'bullion', '3', 'blackmednet', 'propaganda', 'abc', 'satellite phones', 'planet-1', 'cryptanalysis', 'fbi', 'panama', 'fissionable', 'sears tower', 'norad', 'delta force', 'seal', 'virtual', 'dolch', 'secure shell', 'screws', 'black-ops', 'area51', 'sabc', 'basement', 'data-haven', 'black-bag', 'tempset', 'goodwin', 'rebels', 'id', 'md5', 'garbage', 'beef', 'stego', 'unclassified', 'utopia', 'orthodox', 'alica', 'sha', 'global', 'gorilla', 'bob', 'pseudonyms', 'mitm', 'gray data', 'vlsi', 'mega', 'leitrim', 'yakima', 'sugar grove', 'cowboy', 'gist', '8182', 'gatt', 'platform', '1911', 'geraldton', 'ukusa', 'veggie', '3848', 'morwenstow', 'consul', 'oratory', 'pine gap', 'menwith', 'mantis', 'dsd', 'bvd', '1984', 'flintlock', 'cybercash', 'hate', 'speedbump', 'illuminati', 'cocaine', '$', 'roswell', 'esn', 'cos', 'e.t.', 'credit card', 'b9', 'fraud', 'assasinate', 'virus', 'anarchy', 'rogue', 'mailbomb', '888', 'chelsea', '1997', 'whitewater', 'mod', 'plutonium', 'william gates', 'clone', 'batf', 'sgdn', 'nike', 'atlas', 'delta', 'twa', 'kiwi', 'pgp 2.6.2.', 'pgp 5.0i', 'pgp 5.1', 'siliconpimp', 'lynch', '414', 'pixar', 'iridf', 'eternity server', 'skytel', 'yukon', 'templeton', 'luk', 'cohiba', 'soros', 'standford', 'niche', '51', 'h&k', 'usp', '^', 'sardine', 'bank', 'eub', 'usp', 'pcs', 'nro', 'red cell', 'glock 26', 'snuffle', 'patel', 'package', 'isi', 'inr', 'ins', 'irs', 'gru', 'ruop', 'gss', 'nsp', 'sri', 'ronco', 'armani', 'boss', 'chobetsu', 'fbis', 'bnd', 'sisde', 'fsb', 'bfv', 'ib', 'froglegs', 'jitem', 'sadf', 'advise', 'tusa', 'hohocon', 'sismi', 'fis', 'msw', 'spyderco', 'uop', 'ssci', 'nima', 'mois', 'svr', 'sin', 'advisors', 'sap', 'oau', 'pfs', 'aladdin', 'chameleon man', 'hutsul', 'cesid', 'bess', 'rail gun', 'peering', '17', '312', 'nb', 'cbm', 'ctp', 'sardine', 'sbirs', 'sgdn', 'adiu', 'deadbeef', 'idp', 'idf', 'halibut', 'sonangol', 'flu', '&', 'loin', 'pgp 5.53', 'eg&g', 'aiews', 'amw', 'worm', 'mp5k-sd', '1071', 'wings', 'cdi', 'dyncorp', 'uxo', 'ti', 'thaad', 'package', 'chosen', 'prime', 'surviac', 'ufo.'];
