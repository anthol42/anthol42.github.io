# refnd.utils

### *class* refnd.utils.BitFingerprint(fp: ExplicitBitVect)

Bases: `object`

Dense binary fingerprint backed by a dense bitset.

Each bit represents the presence or absence of a structural feature.
The primary source is an RDKit `ExplicitBitVect` (from `GetFingerprint`),
but plain Python lists and numpy arrays are also accepted.

`count` caches the popcount so Tanimoto computation avoids re-counting.

Example:

```default
from rdkit.Chem import rdFingerprintGenerator, MolFromSmiles
from refnd.utils import BitFingerprint

mfpgen = rdFingerprintGenerator.GetMorganGenerator(fpSize=1024, radius=2)
mol = MolFromSmiles("c1ccccc1")
fp = BitFingerprint(mfpgen.GetFingerprint(mol))
print(fp.count(), len(fp))   # set bits, total bits
```

#### count() → int

Number of on bits (popcount).

#### *static* from_list(values: Sequence[bool]) → [BitFingerprint](#refnd.utils.BitFingerprint)

Construct from a list of booleans (or 0/1 ints).

#### *static* from_np(arr: numpy.typing.NDArray[numpy.bool_]) → [BitFingerprint](#refnd.utils.BitFingerprint)

Construct from a numpy boolean or uint8 array.

#### *static* random(len: int, count: int) → [BitFingerprint](#refnd.utils.BitFingerprint)

Create a fingerprint of `len` bits with exactly `count` bits set at random.

Useful for randomized testing.

* **Parameters:**
  * **len** – Total number of bits.
  * **count** – Number of bits to turn on. Must be `<= len`.
* **Raises:**
  **ValueError** – If `count > len`.

#### to_list() → list[bool]

Export as a list of booleans.

#### to_np() → numpy.typing.NDArray[numpy.bool_]

Export as a numpy bool array.

#### to_rdkit() → ExplicitBitVect

Export as an RDKit `ExplicitBitVect`.

#### fp *: ExplicitBitVect*

#### return *: [BitFingerprint](#refnd.utils.BitFingerprint)*

### *class* refnd.utils.RealFingerprint(fp: UIntSparseIntVect)

Bases: `object`

Dense real-valued fingerprint backed by a `Vec<f32>`.

Each element represents a feature count or continuous value. The primary
source is an RDKit `UIntSparseIntVect` (from `GetCountFingerprint`),
but plain Python lists and numpy arrays are also accepted.

`norm_sq` caches `||x||²` so Tanimoto computation avoids recomputing it.

Example:

```default
from rdkit.Chem import rdFingerprintGenerator, MolFromSmiles
from refnd.utils import RealFingerprint
from refnd.kernels.molecules import TanimotoReal

mfpgen = rdFingerprintGenerator.GetMorganGenerator(fpSize=1024, radius=2)
mol = MolFromSmiles("c1ccccc1")
fp = RealFingerprint(mfpgen.GetCountFingerprint(mol))
print(fp.norm_sq(), len(fp))
```

#### *static* from_list(values: Sequence[float]) → [RealFingerprint](#refnd.utils.RealFingerprint)

Construct from a list of floats.

#### *static* from_np(arr: numpy.typing.NDArray[numpy.float32]) → [RealFingerprint](#refnd.utils.RealFingerprint)

Construct from a numpy float32 or float64 array.

#### norm_sq() → float

Squared Euclidean norm of the feature vector (`||x||²`).

#### to_list() → list[float]

Export as a list of floats.

#### to_np() → numpy.typing.NDArray[numpy.float32]

Export as a numpy float32 array.

#### to_rdkit() → UIntSparseIntVect

Export as an RDKit `UIntSparseIntVect`, compatible with `GetCountFingerprint`.
Only non-zero elements are stored; the length equals `len(self)`.

#### fp *: UIntSparseIntVect*

#### return *: [RealFingerprint](#refnd.utils.RealFingerprint)*

### *class* refnd.utils.PdbStructure(path: str)

Bases: `object`

A protein structure loaded from a PDB file and held in memory.

The structure is parsed once on construction and the coordinate arrays are
kept alive for the lifetime of the object. Cloning is cheap (reference-counted).

Example:

```default
from refnd.utils import PdbStructure
s = PdbStructure("1abc.pdb")
```

#### path *: str*

#### return *: [PdbStructure](#refnd.utils.PdbStructure)*

### refnd.utils.read_fasta(path: str) → list[tuple[str, str]]

Parse a FASTA file and return all records as a list of `(header, sequence)` pairs.

The header string is the full description line without the leading `>`.
The sequence is the concatenation of all continuation lines for that record,
with whitespace stripped.

* **Parameters:**
  **path** – Path to the FASTA file.
* **Returns:**
  A list of `(header, sequence)` tuples, one per FASTA record.
* **Raises:**
  **IOError** – If the file cannot be opened or is not valid UTF-8.

Example:

```default
from refnd.utils import read_fasta

records = read_fasta("proteins.fasta")
header, seq = records[0]
print(header)  # "sp|P12345|MYPR_HUMAN ..."
print(seq)     # "MKTAYIAKQRQISFVKSHFSRQ..."
```

### refnd.utils.largest_cluster(clusters: Sequence[int]) → tuple[int, int]

Return the ID and size of the largest cluster.

Convenience helper — iterates over a cluster-label vector and finds the
most populous label.

* **Parameters:**
  **clusters** – A list of cluster IDs (e.g. from `connected_components` or
  `find_communities`).
* **Returns:**
  A tuple `(cluster_id, size)` for the largest cluster.
