from mrjob.job import MRJob
import operator


# This class will run and count all of the words in this log file. You will need to figure out
# which pages have the most hits so you need to revise this mapper/reducer to find out how which
# pages have the most hists. Each line is a client connecting to the server in the format:
# V,[page id],[title],[path of page hit]
class MRWordCounter(MRJob):

	def init_dict(self):
		self.allwords = {}

		# Write your mapper class herr

	def mapper(self, key, line):
		words  = line.split(',')
		yield words[2], 1


	# Write your reducer class here
	def reducer(self, word, occurrences):
		total = sum(occurrences)
		self.allwords[word] = total

	def reducer_2(self):
		sorted_x = sorted(self.allwords.items(), key=operator.itemgetter(1), reverse=True)
		for x in sorted_x[:10]:
			yield x
	
	def steps(self):
		return [
			self.mr(mapper = self.mapper,
					reducer_init = self.init_dict,
					reducer = self.reducer,
					reducer_final = self.reducer_2)
			]


if __name__ == '__main__':
	MRWordCounter.run()